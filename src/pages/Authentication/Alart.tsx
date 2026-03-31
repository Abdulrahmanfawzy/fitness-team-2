import { AlertCircleIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertDestructiveProps {
  text: string;
}

export function AlertCoponant({ text }: AlertDestructiveProps) {
  return (
    <div className=" fixed top-2 bg-transparent ">
      <Alert variant="destructive" className="max-w-lg bg-transparent border-red-600">
        <AlertCircleIcon />
        <AlertTitle>Authentication Error</AlertTitle>
        <AlertDescription>{text}</AlertDescription>
      </Alert>
    </div>
  );
}
