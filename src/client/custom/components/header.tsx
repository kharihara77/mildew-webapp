export function Header() {
    return (
      <header className="relative bg-gradient-to-r from-[#3D0B0B] to-[#621111] px-6 py-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h1 className="text-3xl font-semibold text-[#FDF6E9] mb-3">Mildew Risk Forecast</h1>
              <div className="bg-[#FDF6E9]/20 backdrop-blur-sm rounded-lg p-4 text-[#FDF6E9]/90 space-y-2 text-sm">
                <p>
                  The Mildew Risk Index predicts the likelihood of mildew development based on environmental conditions.
                </p>
                <ul className="space-y-1 ml-6 list-disc text-[#FDF6E9]/80">
                  <li>Forecast range: Minimum 1 days, Maximum 16 days</li>
                  <li>Index scale: 0 (Low Risk) to 100 (High Risk)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-[#FDF6E9]"></div>
      </header>
    )
  }
  
  