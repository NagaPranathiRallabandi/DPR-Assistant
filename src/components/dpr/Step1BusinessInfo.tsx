import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const step1Schema = z.object({
  proposalTitle: z.string().min(5, "Proposal title must be at least 5 characters"),
  applicantName: z.string().min(2, "Name is required"),
  contactNumber: z.string().min(10, "Valid contact number required"),
  email: z.string().email("Valid email required"),
  registeredAddress: z.string().min(10, "Complete address required"),
  cfcAddress: z.string().min(10, "CFC location required"),
  mainFacilities: z.string().min(20, "Describe the facilities to be provided"),
  
  // Section 2.1 - Introduction
  stateIndustryScenario: z.string().min(50, "Describe the industrial growth scenario"),
  sectorDescription: z.string().min(50, "Describe the sector for CFC"),
  clusterProducts: z.string().min(50, "Describe cluster products and prospects"),
  numberOfUnits: z.string().min(1, "Number of units required"),
  employment: z.string().min(1, "Employment data required"),
  turnover: z.string().min(1, "Turnover data required"),
  cfcRelevance: z.string().min(50, "Explain CFC relevance to cluster growth"),
  
  // Section 3 - SPV Information
  spvName: z.string().min(2, "SPV name required"),
  spvAddress: z.string().min(10, "SPV address required"),
  spvRegistrationNumber: z.string().min(5, "Registration number required"),
  spvFormationDate: z.string().min(1, "Formation date required"),
  spvCommencementDate: z.string().min(1, "Commencement date required"),
  mseMemberUnits: z.string().min(1, "Number of MSE units required"),
  spvObjectives: z.string().min(20, "Main objectives required"),
  authorizedShareCapital: z.string().min(1, "Share capital required"),
  
  // Section 4 - Promoter Details
  promoterName: z.string().min(2, "Promoter name required"),
  promoterAge: z.string().min(1, "Age required"),
  promoterQualification: z.string().min(2, "Qualification required"),
  promoterExperience: z.string().min(10, "Experience details required"),
});

export type Step1FormData = z.infer<typeof step1Schema>;

interface Step1Props {
  onSubmit: (data: Step1FormData) => void;
  defaultValues?: Partial<Step1FormData>;
}

export const Step1BusinessInfo = ({ onSubmit, defaultValues }: Step1Props) => {
  const form = useForm<Step1FormData>({
    resolver: zodResolver(step1Schema),
    defaultValues: defaultValues || {},
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>1. Proposal Information</CardTitle>
            <CardDescription>Basic details about your DPR proposal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="proposalTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Proposal Title *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter proposal title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Applicant Details</CardTitle>
            <CardDescription>Contact information and addresses</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="applicantName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Applicant Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="10-digit mobile number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="registeredAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registered Address *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Complete registered address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cfcAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CFC Location Address *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Address where facilities are proposed" {...field} />
                  </FormControl>
                  <FormDescription>Location of Common Facility Centre</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mainFacilities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Main Facilities Being Proposed *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Details of facilities to be provided" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2.1 Introduction</CardTitle>
            <CardDescription>Industry and sector context</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="stateIndustryScenario"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>General Scenario of Industrial Growth/Cluster Development in State *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe the industrial growth landscape" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sectorDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sector for which CFC is Proposed *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe the sector in detail" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="clusterProducts"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cluster and Products *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Products, future prospects, competition, backward and forward linkages" rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="numberOfUnits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Units *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 50" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="employment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employment (Direct/Indirect) *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 200/300" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="turnover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Turnover (₹ Lakhs) *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 500" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="cfcRelevance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How Proposed CFC is Relevant to Cluster Growth *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Explain the relevance and impact" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. SPV (Special Purpose Vehicle) Information</CardTitle>
            <CardDescription>Details about the implementing organization</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="spvName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SPV Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Name of SPV" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="spvAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SPV Address *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Complete SPV address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="spvRegistrationNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Registration Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="SPV registration number" {...field} />
                    </FormControl>
                    <FormDescription>Section 8 company registration details</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="authorizedShareCapital"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Authorized Share Capital (₹) *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 10,00,000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="spvFormationDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Formation *</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="spvCommencementDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Commencement *</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="mseMemberUnits"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of MSE Member Units *</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 25" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="spvObjectives"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Main Objectives of SPV *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List the primary objectives" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Promoter Details</CardTitle>
            <CardDescription>Information about key promoters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="promoterName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Promoter Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Chief promoter name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="promoterAge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age (years) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 45" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="promoterQualification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Educational Qualification *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., B.Tech, MBA" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="promoterExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience Details *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Experience in what capacity, industry, and years" rows={4} {...field} />
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
