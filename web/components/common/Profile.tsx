"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { UserRoundIcon } from "lucide-react";
import Image from "next/image";

export default function Profile() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-0 rounded-full py-0 ps-0">
          <div className="me-0.5 flex aspect-square h-full p-1.5">
            <Image
              className="h-auto w-full rounded-full"
              src="https://originui.com/avatar-80-07.jpg"
              alt="Profile image"
              width={24}
              height={24}
              aria-hidden="true"
            />
          </div>
          @georgelucas
        </Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col gap-0 overflow-y-visible p-0 sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4 text-base">
            Edit profile
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Make changes to your profile here. You can change your photo and set a
          username.
        </DialogDescription>

        <DialogFooter className="border-t px-6 py-4"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
