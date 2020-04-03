
  Pod::Spec.new do |s|
    s.name = 'CapacitorDarkMode'
    s.version = '0.0.1'
    s.summary = 'Enable Dark Mode'
    s.license = 'MIT'
    s.homepage = 'https://github.com/hinddeep/ionicCapacitorDarkMode'
    s.author = 'Hinddeep Purohit'
    s.source = { :git => 'https://github.com/hinddeep/ionicCapacitorDarkMode', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end