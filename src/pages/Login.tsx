<div className="min-h-screen bg-[#F0F2F5] transition-all duration-300">
  <Navbar />
  <div className="container mx-auto px-4 py-8">
    <div className="max-w-md mx-auto bg-white p-8 rounded-[30px] shadow-lg transform transition-all duration-300 hover:shadow-xl">
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="mobile" className="text-gray-600">
            Mobile Number
          </Label>
          <Input
            id="mobile"
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
            required
            placeholder="Enter your mobile number"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-gray-600">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
            required
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-right">
          <Link to="/forgot-password" className="text-blue-500 hover:text-blue-600 text-sm">
            Forgot Password?
          </Link>
        </div>

        <Captcha value={userCaptcha} onChange={setUserCaptcha} />

        <Button 
          type="submit" 
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          Sign In
        </Button>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:text-blue-600 font-semibold">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  </div>
</div>
