"use server";

import prisma from "@/app/lib/db";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { ErrorState } from "@/app/ui/RequestForm";

export async function submitRequest(
   type: string,
   subtype: string | null,
   message: string | null,
   credentials: string | null
): Promise<void> {
   const session = await auth();
   if (!session?.user?.id) {
      throw new Error("لطفا اول وارد شوید");
   }

   try {
      await prisma.request.create({
         data: {
            type,
            subtype,
            message,
            credentials,
            userId: session.user.id,
         },
      });

      console.log(`✅✅✅ New request submitted: ${type} ${subtype}`);
   } catch (err) {
      console.error("❌ Failed to submit request", err);
      throw new Error("Failed to submit request. Please try again later.");
   }
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

export async function submitConsultation(prevState: ErrorState | undefined, formData: FormData): Promise<ErrorState> {
   try {
      await submitRequest(
         "consultation",
         formData.get("subtype") as string, // financial | academic
         formData.get("message") as string,
         null
      );
   } catch (err) {
      return { error: err instanceof Error ? err.message : "Unknown Error" };
   }
   // revalidatePath('/dashboard/requests')
   redirect("/dashboard/requests");
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

export async function submitDocumentEditing(prevState: ErrorState, formData: FormData) {
   try {
      await submitRequest(
         "document-editing",
         formData.get("subtype") as string, // sop | cv | recommendation | email | paper
         formData.get("message") as string,
         null
      );
   } catch (err) {
      return { error: err instanceof Error ? err.message : "Unknown Error" };
   }

   redirect("/dashboard/requests");
}
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// export async function submitApplicationFees(prevState: ErrorState, formData: FormData) {
//    try {
//       await submitRequest(
//          "application-fees",
//          formData.get("subtype") as string, // wes | ece | fsca | ircc | toefl | gre | coursera
//          null,
//          formData.get("credentials") as string
//       );
//    } catch (err) {
//       return { error: err instanceof Error ? err.message : "Unknown Error" };
//    }

//    redirect("/dashboard/requests");
// }

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

export async function submitAppOrPayment(prevState: ErrorState, formData: FormData): Promise<ErrorState> {
   try {
      const requestType = formData.get("requestType") as "application-fees" | "foreign-payments";
      const subtype = formData.get("subtype") as string;
      const credentials = formData.get("credentials") as string;

      await submitRequest(requestType, subtype, null, credentials);
   } catch (err) {
      return { error: err instanceof Error ? err.message : "Unknown Error" };
   }

   redirect("/dashboard/requests");
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

export async function submitAdmissions(prevState: ErrorState, formData: FormData) {
   try {
      await submitRequest(
         "admissions",
         formData.get("subtype") as string, // schools | masters | phd | scholarships | loans | student-visa
         formData.get("message") as string,
         null
      );
   } catch (err) {
      return { error: err instanceof Error ? err.message : "Unknown Error" };
   }

   redirect("/dashboard/requests");
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

export async function submitServiceEntry(prevState: ErrorState, formdata: FormData) {
   try {
      await submitRequest(
         "services-entry",
         formdata.get("subtype") as string, // home | reserve
         formdata.get("message") as string,
         null
      );
   } catch (err) {
      return {error: err instanceof Error ? err.message: "Unknown Error"}
   }
   redirect("/dashboard/requests");

}
