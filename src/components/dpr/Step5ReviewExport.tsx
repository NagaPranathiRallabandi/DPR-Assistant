import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, CheckCircle } from "lucide-react";
import { Step1FormData } from "./Step1BusinessInfo";
import { Step2FormData } from "./Step2ProjectDetails";
import { Step3FormData } from "./Step3FinancialPlanning";
import { Step4FormData } from "./Step4MarketAnalysis";

interface Step5Props {
  step1Data?: Step1FormData;
  step2Data?: Step2FormData;
  step3Data?: Step3FormData;
  step4Data?: Step4FormData;
  onExport: () => void;
}

export const Step5ReviewExport = ({ 
  step1Data, 
  step2Data, 
  step3Data, 
  step4Data,
  onExport 
}: Step5Props) => {
  const calculateTotalCost = () => {
    if (!step3Data) return "0.00";
    const land = parseFloat(step3Data.landBuildingCost || "0");
    const machinery = parseFloat(step3Data.machineryInstallationCost || "0");
    const prelim = parseFloat(step3Data.preliminaryExpenses || "0");
    const working = parseFloat(step3Data.marginMoneyWorkingCapital || "0");
    return (land + machinery + prelim + working).toFixed(2);
  };

  const sectionsCompleted = [
    { name: "Business Information", completed: !!step1Data },
    { name: "Project Details", completed: !!step2Data },
    { name: "Financial Planning", completed: !!step3Data },
    { name: "Market Analysis", completed: !!step4Data },
  ];

  const allCompleted = sectionsCompleted.every(s => s.completed);

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-secondary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-secondary-foreground">
            <FileText className="h-6 w-6" />
            DPR Summary
          </CardTitle>
          <CardDescription className="text-secondary-foreground/80">
            Review your complete Detailed Project Report
          </CardDescription>
        </CardHeader>
        <CardContent className="text-secondary-foreground">
          <div className="space-y-4">
            {sectionsCompleted.map((section, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-background/20 rounded-lg">
                <span className="font-medium">{section.name}</span>
                {section.completed ? (
                  <CheckCircle className="h-5 w-5 text-green-400" />
                ) : (
                  <span className="text-xs text-secondary-foreground/60">Incomplete</span>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {step1Data && (
        <Card>
          <CardHeader>
            <CardTitle>1. Business Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Proposal Title</p>
                <p className="font-medium">{step1Data.proposalTitle}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Applicant Name</p>
                <p className="font-medium">{step1Data.applicantName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">SPV Name</p>
                <p className="font-medium">{step1Data.spvName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Number of MSE Units</p>
                <p className="font-medium">{step1Data.mseMemberUnits}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step2Data && (
        <Card>
          <CardHeader>
            <CardTitle>2. Project Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Implementation Period</p>
                <p className="font-medium">{step2Data.implementationPeriod}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Power Requirements</p>
                <p className="font-medium">{step2Data.powerRequirements}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Manpower</p>
                <p className="font-medium">
                  {parseInt(step2Data.managerCount || "0") + 
                   parseInt(step2Data.supervisorCount || "0") + 
                   parseInt(step2Data.skilledWorkerCount || "0") + 
                   parseInt(step2Data.unskilledWorkerCount || "0")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step3Data && (
        <Card>
          <CardHeader>
            <CardTitle>3. Financial Planning</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Total Project Cost</p>
                <p className="font-medium text-lg">₹ {calculateTotalCost()} Lakhs</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">GoI Grant</p>
                <p className="font-medium text-lg">₹ {step3Data.goiGrant} Lakhs ({step3Data.goiGrantPercent}%)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">SPV Contribution</p>
                <p className="font-medium">₹ {step3Data.spvContribution} Lakhs ({step3Data.spvContributionPercent}%)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Bank Loan</p>
                <p className="font-medium">₹ {step3Data.bankLoan} Lakhs ({step3Data.bankLoanPercent}%)</p>
              </div>
            </div>
            <div className="border-t pt-3 mt-3">
              <p className="text-sm text-muted-foreground mb-2">5-Year Projected Income</p>
              <div className="grid grid-cols-5 gap-2 text-center">
                <div className="bg-muted/30 p-2 rounded">
                  <p className="text-xs text-muted-foreground">FY1</p>
                  <p className="font-medium text-sm">₹{step3Data.incomeY1}L</p>
                </div>
                <div className="bg-muted/30 p-2 rounded">
                  <p className="text-xs text-muted-foreground">FY2</p>
                  <p className="font-medium text-sm">₹{step3Data.incomeY2}L</p>
                </div>
                <div className="bg-muted/30 p-2 rounded">
                  <p className="text-xs text-muted-foreground">FY3</p>
                  <p className="font-medium text-sm">₹{step3Data.incomeY3}L</p>
                </div>
                <div className="bg-muted/30 p-2 rounded">
                  <p className="text-xs text-muted-foreground">FY4</p>
                  <p className="font-medium text-sm">₹{step3Data.incomeY4}L</p>
                </div>
                <div className="bg-muted/30 p-2 rounded">
                  <p className="text-xs text-muted-foreground">FY5</p>
                  <p className="font-medium text-sm">₹{step3Data.incomeY5}L</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step4Data && (
        <Card>
          <CardHeader>
            <CardTitle>4. Market Analysis & Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Employment Impact</p>
                <p className="font-medium">{step4Data.employmentBeforeIntervention} → {step4Data.employmentAfterIntervention}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Turnover Impact</p>
                <p className="font-medium">₹{step4Data.turnoverBeforeIntervention}L → ₹{step4Data.turnoverAfterIntervention}L</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pollution Control Status</p>
                <p className="font-medium">{step4Data.pollutionControlStatus}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Land Use Permission</p>
                <p className="font-medium">{step4Data.landUsePermissionStatus}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Export Your DPR
          </CardTitle>
          <CardDescription>
            {allCompleted 
              ? "Your DPR is complete and ready to export!"
              : "Complete all sections to export your DPR"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!allCompleted && (
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 p-4 rounded-lg">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                Please complete all sections before exporting your DPR.
              </p>
            </div>
          )}
          
          <div className="flex flex-col gap-3">
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full"
              onClick={onExport}
              disabled={!allCompleted}
            >
              <Download className="h-5 w-5 mr-2" />
              Export as PDF
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full"
              disabled={!allCompleted}
            >
              <FileText className="h-5 w-5 mr-2" />
              Export as Word Document
            </Button>
          </div>

          <div className="text-xs text-muted-foreground space-y-1 pt-4 border-t">
            <p>• Your DPR will include all 21 sections as per MSE-CDP guidelines</p>
            <p>• The document will be formatted for bank and government submission</p>
            <p>• Both English and Telugu versions will be generated</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
