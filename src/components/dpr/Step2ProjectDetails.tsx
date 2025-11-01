import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const step2Schema = z.object({
  // Section 8 - Technical Aspects
  projectScope: z.string().min(50, "Describe the project scope in detail"),
  locationDetails: z.string().min(20, "Location and infrastructure details required"),
  technology: z.string().min(30, "Technology details required"),
  industry40AI: z.string().optional(),
  rawMaterials: z.string().min(20, "Raw materials/components details required"),
  powerRequirements: z.string().min(10, "Power requirements required"),
  waterRequirements: z.string().min(10, "Water requirements required"),
  effluentDisposal: z.string().min(20, "Effluent disposal method required"),
  
  // Manpower
  managerCount: z.string().min(1, "Number of managers required"),
  supervisorCount: z.string().min(1, "Number of supervisors required"),
  skilledWorkerCount: z.string().min(1, "Number of skilled workers required"),
  unskilledWorkerCount: z.string().min(1, "Number of unskilled workers required"),
  
  // Section 9 - Implementation Schedule
  dprPreparationStart: z.string().min(1, "Start date required"),
  dprPreparationEnd: z.string().min(1, "End date required"),
  governmentSanctionStart: z.string().min(1, "Start date required"),
  governmentSanctionEnd: z.string().min(1, "End date required"),
  nocPollutionStart: z.string().min(1, "Start date required"),
  nocPollutionEnd: z.string().min(1, "End date required"),
  siteDevelopmentStart: z.string().min(1, "Start date required"),
  siteDevelopmentEnd: z.string().min(1, "End date required"),
  buildingUpkeepStart: z.string().min(1, "Start date required"),
  buildingUpkeepEnd: z.string().min(1, "End date required"),
  equipmentOrderStart: z.string().min(1, "Start date required"),
  equipmentOrderEnd: z.string().min(1, "End date required"),
  equipmentSupplyStart: z.string().min(1, "Start date required"),
  equipmentSupplyEnd: z.string().min(1, "End date required"),
  installationStart: z.string().min(1, "Start date required"),
  installationEnd: z.string().min(1, "End date required"),
  powerConnectionStart: z.string().min(1, "Start date required"),
  powerConnectionEnd: z.string().min(1, "End date required"),
  trialRunStart: z.string().min(1, "Start date required"),
  trialRunEnd: z.string().min(1, "End date required"),
  commercialProductionStart: z.string().min(1, "Start date required"),
  commercialProductionEnd: z.string().min(1, "End date required"),
  
  implementationPeriod: z.string().min(1, "Total implementation period required"),
});

export type Step2FormData = z.infer<typeof step2Schema>;

interface Step2Props {
  onSubmit: (data: Step2FormData) => void;
  defaultValues?: Partial<Step2FormData>;
}

export const Step2ProjectDetails = ({ onSubmit, defaultValues }: Step2Props) => {
  const form = useForm<Step2FormData>({
    resolver: zodResolver(step2Schema),
    defaultValues: defaultValues || {},
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>8. Technical Aspects</CardTitle>
            <CardDescription>Project scope and technical specifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="projectScope"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Scope of the Project *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Including components/sections of CFC" rows={5} {...field} />
                  </FormControl>
                  <FormDescription>Describe all components and sections of the CFC</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="locationDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Locational Details and Infrastructure *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Availability of infrastructural facilities" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="technology"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technology *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Technology to be used in the project" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="industry40AI"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry 4.0 / AI / Innovations</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Provision for Industry 4.0, AI, and innovations (if any)" rows={3} {...field} />
                  </FormControl>
                  <FormDescription>Optional: Describe any advanced technologies</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rawMaterials"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Raw Materials / Components *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Details of raw materials and components required" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Utilities</CardTitle>
            <CardDescription>Power, water, and effluent requirements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="powerRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Power Requirements *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 100 KW" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="waterRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Water Requirements *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 5000 liters/day" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="effluentDisposal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Effluent Disposal *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Method and arrangements for effluent disposal" rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Manpower Requirements</CardTitle>
            <CardDescription>Details of employees needed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="managerCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Managers *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="supervisorCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Supervisors *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 4" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="skilledWorkerCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Skilled Workers *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 15" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="unskilledWorkerCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Unskilled Workers *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 10" {...field} />
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
            <CardTitle>9. Implementation Schedule</CardTitle>
            <CardDescription>Timeline for all project activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="implementationPeriod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Implementation Period *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 18 months" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4 border-t pt-4">
              <h4 className="font-semibold">Preparation of Project Report</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="dprPreparationStart"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dprPreparationEnd"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completion Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4 border-t pt-4">
              <h4 className="font-semibold">Sanction of Grant from Government of India</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="governmentSanctionStart"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="governmentSanctionEnd"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completion Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4 border-t pt-4">
              <h4 className="font-semibold">NOC from Pollution Control Board</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nocPollutionStart"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nocPollutionEnd"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completion Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4 border-t pt-4">
              <h4 className="font-semibold">Site Development</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="siteDevelopmentStart"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="siteDevelopmentEnd"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completion Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4 border-t pt-4">
              <h4 className="font-semibold">Building Up-keep</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="buildingUpkeepStart"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="buildingUpkeepEnd"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completion Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4 border-t pt-4">
              <h4 className="font-semibold">Placement of Order to Equipment Supplier</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="equipmentOrderStart"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="equipmentOrderEnd"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completion Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4 border-t pt-4">
              <h4 className="font-semibold">Supply of Equipments by Suppliers</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="equipmentSupplyStart"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="equipmentSupplyEnd"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completion Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4 border-t pt-4">
              <h4 className="font-semibold">Installation of Equipments at Site</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="installationStart"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="installationEnd"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completion Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4 border-t pt-4">
              <h4 className="font-semibold">Sanction of Power Connection</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="powerConnectionStart"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="powerConnectionEnd"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completion Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4 border-t pt-4">
              <h4 className="font-semibold">Trial Run</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="trialRunStart"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="trialRunEnd"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completion Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4 border-t pt-4">
              <h4 className="font-semibold">Commercial Production</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="commercialProductionStart"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="commercialProductionEnd"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completion Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};
