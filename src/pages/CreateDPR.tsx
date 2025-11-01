import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Sparkles, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateDPR = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    { number: 1, title: "Business Information", description: "Tell us about your business" },
    { number: 2, title: "Project Details", description: "Describe your project" },
    { number: 3, title: "Financial Planning", description: "Cost structures and funding" },
    { number: 4, title: "Market Analysis", description: "Target market and competition" },
    { number: 5, title: "Review & Export", description: "Finalize your DPR" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50 shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="font-bold">DPR Creation Wizard</span>
          </div>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium">Step {currentStep} of {totalSteps}</p>
              <p className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</p>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Steps Sidebar */}
          <div className="lg:col-span-3">
            <Card className="shadow-soft sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                      step.number === currentStep
                        ? "bg-primary/10 border-l-4 border-primary"
                        : step.number < currentStep
                        ? "bg-secondary/10 border-l-4 border-secondary"
                        : "bg-muted/30"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold ${
                        step.number === currentStep
                          ? "bg-primary text-primary-foreground"
                          : step.number < currentStep
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Form Area */}
          <div className="lg:col-span-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">{steps[currentStep - 1].title}</CardTitle>
                <CardDescription className="text-base">{steps[currentStep - 1].description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Placeholder for form content */}
                <div className="min-h-[400px] flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                  <div className="text-center space-y-4 p-8">
                    <FileText className="h-16 w-16 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">
                      Step {currentStep} form content will be implemented here
                    </p>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  <Button
                    variant="hero"
                    onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                    disabled={currentStep === totalSteps}
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Suggestions Panel */}
          <div className="lg:col-span-3">
            <Card className="shadow-soft sticky top-24 bg-gradient-secondary">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-secondary-foreground">
                  <Sparkles className="h-5 w-5" />
                  AI Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-secondary-foreground">
                <p className="text-sm opacity-90">
                  Our AI is analyzing your inputs to provide personalized recommendations...
                </p>
                <div className="space-y-3">
                  <div className="bg-background/20 p-3 rounded-lg">
                    <p className="text-sm font-medium">Funding Scheme</p>
                    <p className="text-xs opacity-80 mt-1">
                      Based on your business type, you may be eligible for PMEGP scheme
                    </p>
                  </div>
                  <div className="bg-background/20 p-3 rounded-lg">
                    <p className="text-sm font-medium">Cost Estimate</p>
                    <p className="text-xs opacity-80 mt-1">
                      Similar projects in your sector average ₹15-20 lakhs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDPR;
