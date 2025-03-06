
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define user types
export type UserRole = 'student' | 'tutor';

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  name: string;
  profileImage?: string;
  hasCompletedOnboarding?: boolean;
  hasCompletedTest?: boolean;
  testScore?: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Fake user database for testing - in a real app, this would come from Firebase
const FAKE_USERS = [
  {
    id: '1',
    username: 'student1',
    email: 'student@test.com',
    password: 'student123',
    role: 'student' as UserRole,
    name: 'John Student',
    profileImage: 'https://i.pravatar.cc/150?img=1',
    hasCompletedOnboarding: true,
    hasCompletedTest: true
  },
  {
    id: '2',
    username: 'tutor1',
    email: 'tutor@test.com',
    password: 'tutor123',
    role: 'tutor' as UserRole,
    name: 'Jane Tutor',
    profileImage: 'https://i.pravatar.cc/150?img=2',
    hasCompletedOnboarding: false,
    hasCompletedTest: false
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Check for saved user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const updateUser = (userData: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const login = async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Find user in our fake database
    const foundUser = FAKE_USERS.find(
      u => u.email === email && u.password === password
    );

    if (!foundUser) {
      throw new Error('Invalid email or password');
    }

    // Create user object without password
    const { password: _, ...userWithoutPassword } = foundUser;
    
    // Save user to state and localStorage
    setUser(userWithoutPassword);
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
