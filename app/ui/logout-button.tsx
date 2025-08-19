import { Button } from "@/app/ui/button";
import { PowerIcon } from "@heroicons/react/24/outline";
// import { signOutAction } from "@/app/lib/actions";
import { signOut } from "@/auth";

export default function LogoutButton() {
   return (
      <form
         action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
         }}
      >
         <Button className="bg-indigo-600 hover:bg-indigo-700 focus-visible:outline-indigo-600">
            <PowerIcon className="w-5 mr-2" />
            خروج
         </Button>
      </form>
   );
}
