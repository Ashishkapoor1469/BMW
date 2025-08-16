"use client"

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-card/80 backdrop-blur-sm border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="font-space-grotesk text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience BMW <span className="text-primary">Excellence</span>
          </h3>
          <p className="font-dm-sans text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover the ultimate driving machine at your nearest BMW Center. Schedule a personalized consultation and
            test drive today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-dm-sans font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Find BMW Center
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 rounded-lg font-dm-sans font-medium text-lg transition-all duration-300">
              Build & Price
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-space-grotesk font-semibold text-foreground mb-4">Vehicles</h4>
            <ul className="font-dm-sans text-muted-foreground space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  3 Series
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  5 Series
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  X3
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  X5
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-space-grotesk font-semibold text-foreground mb-4">Services</h4>
            <ul className="font-dm-sans text-muted-foreground space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Service & Parts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  BMW Financial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  BMW ConnectedDrive
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-space-grotesk font-semibold text-foreground mb-4">Company</h4>
            <ul className="font-dm-sans text-muted-foreground space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About BMW
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-space-grotesk font-semibold text-foreground mb-4">Connect</h4>
            <ul className="font-dm-sans text-muted-foreground space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  BMW Magazine
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Social Media
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-dm-sans text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 BMW of North America, LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-dm-sans text-muted-foreground text-sm hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-dm-sans text-muted-foreground text-sm hover:text-primary transition-colors">
                Terms of Use
              </a>
              <a href="#" className="font-dm-sans text-muted-foreground text-sm hover:text-primary transition-colors">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
