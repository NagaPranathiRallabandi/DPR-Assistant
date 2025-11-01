import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const step3Schema = z.object({
  // Section 10 - Project Cost
  landBuildingCost: z.string().min(1, "Land and building cost required"),
  machineryInstallationCost: z.string().min(1, "Machinery cost required"),
  preliminaryExpenses: z.string().min(1, "Preliminary expenses required"),
  marginMoneyWorkingCapital: z.string().min(1, "Working capital margin required"),
  
  // Land and Building Details
  landArea: z.string().min(1, "Land area required"),
  landCost: z.string().min(1, "Land cost required"),
  buildingArea: z.string().min(1, "Building area required"),
  buildingCost: z.string().min(1, "Building cost required"),
  siteDevelopmentCost: z.string().min(1, "Site development cost required"),
  
  // Plant & Machinery Details
  machineryDetails: z.string().min(20, "Machinery details required"),
  
  // Misc Fixed Assets
  miscFixedAssets: z.string().min(10, "Miscellaneous fixed assets required"),
  
  // Expenses
  preliminaryExpensesDetails: z.string().min(10, "Preliminary expenses details required"),
  preOperativeExpenses: z.string().min(10, "Pre-operative expenses details required"),
  contingencyProvisions: z.string().min(10, "Contingency provisions required"),
  
  // Means of Financing
  spvContribution: z.string().min(1, "SPV contribution required"),
  spvContributionPercent: z.string().min(1, "Percentage required"),
  goiGrant: z.string().min(1, "GoI grant amount required"),
  goiGrantPercent: z.string().min(1, "Percentage required"),
  stateGovtGrant: z.string().min(1, "State govt grant required"),
  stateGovtGrantPercent: z.string().min(1, "Percentage required"),
  bankLoan: z.string().min(1, "Bank loan amount required"),
  bankLoanPercent: z.string().min(1, "Percentage required"),
  
  // Usage Charges and Commercial Viability
  usageCharges: z.string().min(20, "Usage charges details required"),
  commercialViabilityComments: z.string().min(50, "Commercial viability comments required"),
  
  // Section 14 - Financial Projections (Year 1-5)
  netBlockY1: z.string().min(1, "Required"),
  netBlockY2: z.string().min(1, "Required"),
  netBlockY3: z.string().min(1, "Required"),
  netBlockY4: z.string().min(1, "Required"),
  netBlockY5: z.string().min(1, "Required"),
  
  currentAssetsY1: z.string().min(1, "Required"),
  currentAssetsY2: z.string().min(1, "Required"),
  currentAssetsY3: z.string().min(1, "Required"),
  currentAssetsY4: z.string().min(1, "Required"),
  currentAssetsY5: z.string().min(1, "Required"),
  
  incomeY1: z.string().min(1, "Required"),
  incomeY2: z.string().min(1, "Required"),
  incomeY3: z.string().min(1, "Required"),
  incomeY4: z.string().min(1, "Required"),
  incomeY5: z.string().min(1, "Required"),
  
  grossProfitY1: z.string().min(1, "Required"),
  grossProfitY2: z.string().min(1, "Required"),
  grossProfitY3: z.string().min(1, "Required"),
  grossProfitY4: z.string().min(1, "Required"),
  grossProfitY5: z.string().min(1, "Required"),
  
  profitAfterTaxY1: z.string().min(1, "Required"),
  profitAfterTaxY2: z.string().min(1, "Required"),
  profitAfterTaxY3: z.string().min(1, "Required"),
  profitAfterTaxY4: z.string().min(1, "Required"),
  profitAfterTaxY5: z.string().min(1, "Required"),
  
  revenueAssumptions: z.string().min(50, "Revenue assumptions required"),
});

export type Step3FormData = z.infer<typeof step3Schema>;

interface Step3Props {
  onSubmit: (data: Step3FormData) => void;
  defaultValues?: Partial<Step3FormData>;
}

export const Step3FinancialPlanning = ({ onSubmit, defaultValues }: Step3Props) => {
  const form = useForm<Step3FormData>({
    resolver: zodResolver(step3Schema),
    defaultValues: defaultValues || {},
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>10. Estimated Project Cost</CardTitle>
            <CardDescription>Financial breakdown in ₹ Lakhs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="landBuildingCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Land and Building (₹ Lakhs) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 50.00" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="machineryInstallationCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plant & Machinery (₹ Lakhs) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 150.00" step="0.01" {...field} />
                    </FormControl>
                    <FormDescription>Including installation, taxes, duties</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preliminaryExpenses"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preliminary & Pre-operative Expenses (₹ Lakhs) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 10.00" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="marginMoneyWorkingCapital"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Margin Money for Working Capital (₹ Lakhs) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 20.00" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Land, Site Development and Building Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="landArea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Land Area (Sq. Ft.) *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 10000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="landCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Land Cost (₹ Lakhs) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 25.00" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="buildingArea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Building Area (Sq. Ft.) *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 5000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="buildingCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Building Cost (₹ Lakhs) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 20.00" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="siteDevelopmentCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Site Development Cost (₹ Lakhs) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 5.00" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Plant & Machinery Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="machineryDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Machinery Description and Costs *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List all machinery with quantities and amounts" rows={6} {...field} />
                  </FormControl>
                  <FormDescription>Include S.No., Description, Number, and Amount for each item</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Other Fixed Assets and Expenses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="miscFixedAssets"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Miscellaneous Fixed Assets *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Furniture, computers, vehicles, etc." rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preliminaryExpensesDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preliminary Expenses Details *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Legal fees, registration, project report fees" rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preOperativeExpenses"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pre-operative Expenses *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Training, recruitment, trial run expenses" rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contingencyProvisions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contingency Provisions *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Buffer for unforeseen expenses" rows={2} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Means of Financing</CardTitle>
            <CardDescription>Sources of funds with percentages</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="spvContribution"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SPV Contribution (₹ Lakhs) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 30.00" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="spvContributionPercent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Percentage (%) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 15" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="goiGrant"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GoI Grant (₹ Lakhs) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 120.00" step="0.01" {...field} />
                    </FormControl>
                    <FormDescription>Grant-in-aid from Government of India under MSE-CDP</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="goiGrantPercent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Percentage (%) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 60" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="stateGovtGrant"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State Government Grant (₹ Lakhs) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 20.00" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="stateGovtGrantPercent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Percentage (%) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 10" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bankLoan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Loan (₹ Lakhs) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 30.00" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bankLoanPercent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Percentage (%) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 15" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>12. Usage Charges</CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="usageCharges"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usage Charges Details *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe how charges will be structured for facility users" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>13. Commercial Viability Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="commercialViabilityComments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comments on Commercial Viability *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Assessment of project's commercial viability" rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>14. Financial Projections (5 Years)</CardTitle>
            <CardDescription>Key financial parameters in ₹ Lakhs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Net Block</h4>
              <div className="grid grid-cols-5 gap-2">
                <FormField control={form.control} name="netBlockY1" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 1 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="netBlockY2" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 2 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="netBlockY3" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 3 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="netBlockY4" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 4 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="netBlockY5" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 5 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Current Assets (incl. cash/bank balance)</h4>
              <div className="grid grid-cols-5 gap-2">
                <FormField control={form.control} name="currentAssetsY1" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 1 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="currentAssetsY2" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 2 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="currentAssetsY3" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 3 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="currentAssetsY4" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 4 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="currentAssetsY5" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 5 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Income</h4>
              <div className="grid grid-cols-5 gap-2">
                <FormField control={form.control} name="incomeY1" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 1 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="incomeY2" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 2 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="incomeY3" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 3 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="incomeY4" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 4 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="incomeY5" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 5 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Gross Profit</h4>
              <div className="grid grid-cols-5 gap-2">
                <FormField control={form.control} name="grossProfitY1" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 1 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="grossProfitY2" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 2 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="grossProfitY3" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 3 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="grossProfitY4" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 4 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="grossProfitY5" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 5 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Profit After Tax</h4>
              <div className="grid grid-cols-5 gap-2">
                <FormField control={form.control} name="profitAfterTaxY1" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 1 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="profitAfterTaxY2" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 2 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="profitAfterTaxY3" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 3 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="profitAfterTaxY4" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 4 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="profitAfterTaxY5" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">FY 5 *</FormLabel>
                    <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
            </div>

            <FormField
              control={form.control}
              name="revenueAssumptions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Revenue Assumptions *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe major assumptions underlying the financial projections" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};
