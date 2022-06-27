# com.zecrey.lib.podspec

require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "com.zecrey.legend"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  com.zecrey.legend
                   DESC
  s.homepage     = "https://github.com/Zecrey-Labs/zecrey-crypto-legend.git"
  # brief license entry:
  s.license      = "MIT"
  # optional - use expanded license entry instead:
  # s.license    = { :type => "MIT", :file => "LICENSE" }
  s.authors      = { "Your Name" => "yourname@email.com" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "git@github.com:Zecrey-Labs/zecrey-crypto-legend.git",:branch => "main" }

  s.source_files = "ios/**/*.{h,c,cc,cpp,m,mm,swift}"
  s.requires_arc = true
  s.vendored_frameworks = 'ios/Zecrey_legend.xcframework'
  s.dependency "React"
  # ...
  # s.dependency "..."
end

