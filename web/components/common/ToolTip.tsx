import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ToolTip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip >
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs rounded-sm bg-background text-foreground">{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
