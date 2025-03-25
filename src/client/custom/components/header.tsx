export function Header() {
    return (
      <header className="shadow-md rounded-lg border border-theme-dark/30 px-6 py-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h1 className="text-3xl font-semibold text-theme-dark mb-3">Mildew Risk Forecast</h1>
              <div className="bg-theme-light/20 backdrop-blur-sm rounded-lg p-4 text-black space-y-2 text-sm">
                <p>
                  The Mildew Risk Index predicts the likelihood of mildew development based on environmental conditions.
                </p>
                <ul className="space-y-1 ml-6 list-disc text-black/80">
                  <li>Forecast range: Minimum 1 days, Maximum 16 days</li>
                  <li>Index scale: 0 (Low Risk) to 100 (High Risk)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </header>
    )
  }
  
  