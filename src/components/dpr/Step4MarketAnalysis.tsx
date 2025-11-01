import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const step4Schema = z.object({
  // Section 15 - Projected Performance
  qtyBeforeIntervention: z.string().min(1, "Required"),
  qtyAfterIntervention: z.string().min(1, "Required"),
  unitsBeforeIntervention: z.string().min(1, "Required"),
  unitsAfterIntervention: z.string().min(1, "Required"),
  employmentBeforeIntervention: z.string().min(1, "Required"),
  employmentAfterIntervention: z.string().min(1, "Required"),
  productionBeforeIntervention: z.string().min(1, "Required"),
  productionAfterIntervention: z.string().min(1, "Required"),
  exportsBeforeIntervention: z.string().min(1, "Required"),
  exportsAfterIntervention: z.string().min(1, "Required"),
  importSubstitutionBefore: z.string().min(1, "Required"),
  importSubstitutionAfter: z.string().min(1, "Required"),
  investmentBeforeIntervention: z.string().min(1, "Required"),
  investmentAfterIntervention: z.string().min(1, "Required"),
  turnoverBeforeIntervention: z.string().min(1, "Required"),
  turnoverAfterIntervention: z.string().min(1, "Required"),
  profitBeforeIntervention: z.string().min(1, "Required"),
  profitAfterIntervention: z.string().min(1, "Required"),
  
  // Section 17 - SWOT Analysis
  strengths: z.string().min(50, "Describe strengths in detail"),
  weaknesses: z.string().min(50, "Describe weaknesses in detail"),
  opportunities: z.string().min(50, "Describe opportunities in detail"),
  threats: z.string().min(50, "Describe threats in detail"),
  
  // Section 18 - Risk Mitigation
  risksImplementation: z.string().min(50, "Describe implementation phase risks"),
  risksOperations: z.string().min(50, "Describe operations phase risks"),
  mitigationImplementation: z.string().min(50, "Describe mitigation measures"),
  mitigationOperations: z.string().min(50, "Describe mitigation measures"),
  
  // Section 16 - Government Approvals
  pollutionControlStatus: z.string().min(10, "Status of pollution control approval"),
  landUsePermissionStatus: z.string().min(10, "Status of land use permission"),
});

export type Step4FormData = z.infer<typeof step4Schema>;

interface Step4Props {
  onSubmit: (data: Step4FormData) => void;
  defaultValues?: Partial<Step4FormData>;
}

export const Step4MarketAnalysis = ({ onSubmit, defaultValues }: Step4Props) => {
  const form = useForm<Step4FormData>({
    resolver: zodResolver(step4Schema),
    defaultValues: defaultValues || {},
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>15. Projected Performance of Cluster</CardTitle>
            <CardDescription>Before and after intervention comparison</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="qtyBeforeIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity/Outcome - Before *</FormLabel>
                    <FormControl>
                      <Input placeholder="Current quantity" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="qtyAfterIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity/Outcome - After *</FormLabel>
                    <FormControl>
                      <Input placeholder="Projected quantity" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="unitsBeforeIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Units (SC/ST/Women/Minorities) - Before *</FormLabel>
                    <FormControl>
                      <Input placeholder="Current units" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="unitsAfterIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Units (SC/ST/Women/Minorities) - After *</FormLabel>
                    <FormControl>
                      <Input placeholder="Projected units" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="employmentBeforeIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employment - Before *</FormLabel>
                    <FormControl>
                      <Input placeholder="Current employment" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="employmentAfterIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employment - After *</FormLabel>
                    <FormControl>
                      <Input placeholder="Projected employment" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="productionBeforeIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Production (₹ Lakhs) - Before *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Current production" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="productionAfterIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Production (₹ Lakhs) - After *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Projected production" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="exportsBeforeIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Exports (₹ Lakhs) - Before *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Current exports" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="exportsAfterIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Exports (₹ Lakhs) - After *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Projected exports" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="importSubstitutionBefore"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Import Substitution (₹ Lakhs) - Before *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Current" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="importSubstitutionAfter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Import Substitution (₹ Lakhs) - After *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Projected" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="investmentBeforeIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Investment (₹ Lakhs) - Before *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Current investment" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="investmentAfterIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Investment (₹ Lakhs) - After *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Projected investment" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="turnoverBeforeIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Turnover (₹ Lakhs) - Before *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Current turnover" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="turnoverAfterIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Turnover (₹ Lakhs) - After *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Projected turnover" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="profitBeforeIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profit (₹ Lakhs) - Before *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Current profit" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="profitAfterIntervention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profit (₹ Lakhs) - After *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Projected profit" step="0.01" {...field} />
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
            <CardTitle>17. SWOT Analysis</CardTitle>
            <CardDescription>Favorable and risk factors of the project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="strengths"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Strengths *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List the key strengths of the project" rows={4} {...field} />
                  </FormControl>
                  <FormDescription>Internal positive attributes</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="weaknesses"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weaknesses *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List the key weaknesses of the project" rows={4} {...field} />
                  </FormControl>
                  <FormDescription>Internal challenges or limitations</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="opportunities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Opportunities *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List external opportunities for the project" rows={4} {...field} />
                  </FormControl>
                  <FormDescription>External favorable conditions</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="threats"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Threats *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List external threats to the project" rows={4} {...field} />
                  </FormControl>
                  <FormDescription>External risks or challenges</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>18. Risk Mitigation Framework</CardTitle>
            <CardDescription>Key risks and mitigation measures</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="risksImplementation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Risks During Implementation *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe risks during the implementation phase" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mitigationImplementation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mitigation Measures - Implementation *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="How these implementation risks will be mitigated" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="risksOperations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Risks During Operations *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe risks during the operations phase" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mitigationOperations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mitigation Measures - Operations *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="How these operational risks will be mitigated" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>16. Status of Government Approvals</CardTitle>
            <CardDescription>Required permissions and their status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="pollutionControlStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pollution Control Approval Status *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Applied, Approved, Pending" {...field} />
                  </FormControl>
                  <FormDescription>NOC from Pollution Control Board</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="landUsePermissionStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Land Use Permission Status *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Applied, Approved, Pending" {...field} />
                  </FormControl>
                  <FormDescription>Permission for land use conversion for industrial purpose</FormDescription>
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
