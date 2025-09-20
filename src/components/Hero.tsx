import React, { useState } from "react";
import { ChevronRight, CheckCircle, RotateCcw } from "lucide-react";

// Using the background image from the original Hero file.
const ecoHomeHero = "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const HeroSection = () => {
  // --- State from EligibilityChecker ---
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    homeowner: "",
    benefit: "",
    lowIncome: "",
    medicalCondition: "",
    propertyType: "",
    heatingSystem: "",
    insulation: "",
  });
  const [eligible, setEligible] = useState(null); // null: not checked, true: eligible, false: not eligible

  // --- Handlers from EligibilityChecker ---
  const handleValueChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Skip optional steps if a condition is met
    if (step === 2 && formData.benefit === 'yes') {
      setStep(5); // Skip to property type
      return;
    }
    if (step === 3 && formData.benefit === 'no') {
      setStep(4);
      return;
    }
     if (step === 4 && formData.benefit === 'no') {
      setStep(5);
      return;
    }

    if (step === 7) {
      const isEligible =
        formData.homeowner === "yes" &&
        (formData.benefit === "yes" || formData.lowIncome === "yes" || formData.medicalCondition === "yes") &&
        (formData.insulation === "no" || formData.heatingSystem === "old");
      setEligible(isEligible);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    setStep(1);
    setFormData({
      homeowner: "",
      benefit: "",
      lowIncome: "",
      medicalCondition: "",
      propertyType: "",
      heatingSystem: "",
      insulation: "",
    });
    setEligible(null);
  };

  // --- Component to render the current question ---
  const QuestionStep = () => {
    const selectClasses = "w-full p-3 border border-gray-500 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 shadow-sm hover:border-gray-400";
    const labelClasses = "text-sm font-medium text-gray-200";

    const renderSelect = (name, options) => (
      <select onChange={(e) => handleValueChange(name, e.target.value)} value={formData[name]} className={selectClasses}>
        <option value="" disabled>Select an option</option>
        {options.map(opt => <option key={opt.value} value={opt.value} className="text-black">{opt.label}</option>)}
      </select>
    );

    switch (step) {
      case 1:
        return (
          <div className="space-y-2">
            <label className={labelClasses}>Are you a homeowner?</label>
            {renderSelect("homeowner", [{value: "yes", label: "Yes"}, {value: "no", label: "No"}])}
          </div>
        );
      case 2:
        return (
          <div className="space-y-2">
            <label className={labelClasses}>Do you receive government benefits?</label>
            {renderSelect("benefit", [{value: "yes", label: "Yes"}, {value: "no", label: "No"}])}
          </div>
        );
      case 3:
         if (formData.benefit === 'no') {
            return (
              <div className="space-y-2">
                <label className={labelClasses}>Is your total household income below £31,000?</label>
                {renderSelect("lowIncome", [{value: "yes", label: "Yes"}, {value: "no", label: "No"}])}
              </div>
            );
         }
         return null;
      case 4:
         if (formData.benefit === 'no') {
            return (
              <div className="space-y-2">
                <label className={labelClasses}>Does a medical condition worsen with cold?</label>
                {renderSelect("medicalCondition", [{value: "yes", label: "Yes"}, {value: "no", label: "No"}])}
              </div>
            );
         }
         return null;
      case 5:
        return (
          <div className="space-y-2">
            <label className={labelClasses}>What is your property type?</label>
            {renderSelect("propertyType", [{value: "house", label: "House"}, {value: "flat", label: "Flat"}])}
          </div>
        );
      case 6:
        return (
          <div className="space-y-2">
            <label className={labelClasses}>What type of heating system do you have?</label>
            {renderSelect("heatingSystem", [{value: "modern", label: "Modern Boiler"}, {value: "old", label: "Old Boiler / None"}])}
          </div>
        );
      case 7:
        return (
          <div className="space-y-2">
            <label className={labelClasses}>Do you already have insulation installed?</label>
            {renderSelect("insulation", [{value: "yes", label: "Yes"}, {value: "no", label: "No"}])}
          </div>
        );
      default:
        return null;
    }
  };

  // --- Dynamic button text ---
  const getButtonText = () => {
    if (step === 7) return "Check Eligibility";
    return "Next Step";
  };
  
  // --- Check if the current step is valid to proceed ---
  const isStepValid = () => {
    const currentField = Object.keys(formData)[step-1];
    if (step === 3 && formData.benefit === 'yes') return true;
    if (step === 4 && formData.benefit === 'yes') return true;
    return formData[currentField] !== "";
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${ecoHomeHero}")`
      }}
    >
      <div className="container mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Take a Step Forward for our Planet's Future
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Expert installers of energy efficiency measures for your home or business. Government grants and loans available to help you meet Net Zero targets.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                Explore Options <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center">
                Learn More
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center space-x-2 text-white/90"><CheckCircle className="h-5 w-5 text-green-400" /><span className="font-medium">Grants Available</span></div>
                <div className="flex items-center space-x-2 text-white/90"><CheckCircle className="h-5 w-5 text-green-400" /><span className="font-medium">Accredited Installers</span></div>
                <div className="flex items-center space-x-2 text-white/90"><CheckCircle className="h-5 w-5 text-green-400" /><span className="font-medium">Energy Efficient</span></div>
            </div>
          </div>

          {/* Eligibility Checker Card */}
          <div className="bg-black/30 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl max-w-md mx-auto lg:mx-0">
            <div className="p-8 space-y-6">
              {eligible === null ? (
                <>
                  <div className="text-center space-y-2">
                      <h2 className="text-2xl font-bold text-white">ECO Grant Eligibility</h2>
                      <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">CHECKER</p>
                      <p className="text-gray-300">Check if you qualify for government funding</p>
                  </div>
                  <div className="space-y-4">
                      <QuestionStep />
                      <button onClick={handleNext} disabled={!isStepValid()} className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center text-lg transition-colors duration-300">
                          {getButtonText()} <ChevronRight className="ml-2 h-5 w-5" />
                      </button>
                  </div>
                </>
              ) : (
                <div className="text-center space-y-4">
                   <h2 className={`text-2xl font-bold ${eligible ? 'text-green-400' : 'text-red-400'}`}>
                      {eligible ? 'Congratulations!' : 'Eligibility Unlikely'}
                   </h2>
                   <p className="text-gray-200">
                      {eligible
                          ? "Based on your answers, you may be eligible for support under the scheme."
                          : "Unfortunately, you may not qualify. Please contact us for more information."
                      }
                   </p>
                   <button onClick={handleRestart} className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
                      Start Again <RotateCcw className="ml-2 h-5 w-5" />
                   </button>
                </div>
              )}
               <div className="text-center pt-2">
                  <p className="text-xs text-gray-400">Free assessment • No obligation • Quick results</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

