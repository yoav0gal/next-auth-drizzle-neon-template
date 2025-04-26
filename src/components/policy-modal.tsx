import React from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PolicyModalProps {
  trigger: React.ReactNode;
  title: string;
  contentComponent: React.ReactNode; // Changed from children
  linkHref: string; // Keep for potential future use or remove if definitely not needed
}

export function PolicyModal({
  trigger,
  title,
  contentComponent, // Changed from children
  linkHref, // Keep or remove based on decision
}: PolicyModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Please review our {title.toLowerCase()}.
          </DialogDescription>
        </DialogHeader>
        {/* Make the content area scrollable within the dialog */}
        <div className="grid gap-4 py-4 text-sm text-muted-foreground max-h-[60vh] overflow-y-auto pr-6">
          {contentComponent} {/* Render the passed component */}
        </div>
        {/* Footer removed as full policy is now inline */}
        {/* <DialogFooter className="sm:justify-start">
          <Button type="button" variant="secondary" asChild>
            <Link href={linkHref}>View Full Policy</Link>
          </Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
