"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Upload } from "lucide-react";
import PredefineDescription from "./PredefineDescription";
import ToolTip from "../ToolTip";
import { useState } from "react";

export default function DocInput() {
  const [jobDescription, setJobDescription] = useState("");

  const handleFileUpload = () => {
    // Create a file input element
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pdf,.doc,.docx,.txt";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // Here you would typically process the CV file
        console.log("CV uploaded:", file.name);
        // You could extract text from the CV and populate the job description
      }
    };
    input.click();
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 border border-border rounded-xl sm:rounded-2xl bg-card shadow-lg">
      <div className="space-y-4">
        <Textarea
          placeholder="Enter your job description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="min-h-[55px] sm:min-h-[55px] resize-none border-none shadow-none text-sm sm:text-base placeholder:text-muted-foreground placeholder:bg-transparent focus-visible:ring-0 p-0 bg-transparent dark:bg-transparent"
        />

        <div className="flex flex-row justify-between items-center gap-3 sm:gap-0">
          <div className="flex flex-row gap-1">
            <ToolTip content="Upload a CV file">
              <Button
                onClick={handleFileUpload}
                variant="ghost"
                className="border-border hover:bg-accent bg-transparent text-sm"
              >
                <Upload className="h-4 w-4" />
              </Button>
            </ToolTip>

            <PredefineDescription />
          </div>

          <Button
            variant="outline"
            className="border-border hover:bg-accent bg-transparent text-sm"
          >
            <Send className="mr-2 h-4 w-4" />
            <span className="truncate">Submit</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
