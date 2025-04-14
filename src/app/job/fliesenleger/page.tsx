
const JobDescription = () => {
  return (
    <>
   

      <div className="min-h-screen bg-[#f8f5f0]">
        {/* Hero Section */}
        <div className="relative bg-red-900 text-white">
          <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">ZIMMERER <span className="text-yellow-400">(M/W/D)</span></h1>
            <p className="text-xl md:text-2xl mb-8">Become part of our skilled team at Appelt Bauservice</p>
            
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
          </div>
        </div>

        {/* Job Details */}
        <div className="container mx-auto px-6 py-12 md:py-16 lg:py-20 -mt-16 md:-mt-24 lg:-mt-32 relative z-10">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Benefits Column */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Ihre Vorteile</h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-yellow-100 p-2 rounded-full mr-4">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Attraktive Bezahlung</h3>
                      <p className="text-gray-600">21€ brutto/Std. + 3€ Leistungszulage</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Hochwertige Ausstattung</h3>
                      <p className="text-gray-600">Modernstes Werkzeug & beste Materialien</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Optimale Arbeitsbedingungen</h3>
                      <p className="text-gray-600">Klare Strukturen & durchdachte Abläufe</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Teamgeist</h3>
                      <p className="text-gray-600">Regelmäßige Team-Events & gute Stimmung</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Application Column */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Ihre Aufgaben</h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
                    <p className="text-gray-700">Dachkonstruktionen und Holzbauarbeiten</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
                    <p className="text-gray-700">Fenster- und Türeneinbau</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
                    <p className="text-gray-700">Innenausbau mit Holzwerkstoffen</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
                    <p className="text-gray-700">Montage von Fertigteilen</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
                    <p className="text-gray-700">Qualitätssicherung der eigenen Arbeit</p>
                  </li>
                </ul>
                
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Ihr Profil</h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
                    <p className="text-gray-700">Abgeschlossene Ausbildung als Zimmerer/in</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
                    <p className="text-gray-700">Berufserfahrung wünschenswert</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
                    <p className="text-gray-700">Teamfähigkeit und Eigeninitiative</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
                    <p className="text-gray-700">Zuverlässigkeit und handwerkliches Geschick</p>
                  </li>
                </ul>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Jetzt in 30 Sekunden bewerben</h3>
                  <p className="text-gray-600 mb-6">Senden Sie uns Ihren Lebenslauf oder rufen Sie uns direkt an!</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#8E7444] cursor-pointer hover:bg-[#5d5442] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Per E-Mail bewerben
                    </button>
                    <button className="bg-red-600 cursor-pointe hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Rückruf anfordern
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Branding */}
        <div className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">APPELT BAUSERVICE</h2>
            <p className="text-xl md:text-2xl text-yellow-400 font-medium">ALLES AUS EINER HAND</p>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDescription;