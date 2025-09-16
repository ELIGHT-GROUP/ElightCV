import { Button } from "@/components/ui/button";
import {
  Drawer,
  //DrawerClose,
  DrawerContent,
  DrawerDescription,
  //DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { LayoutGrid } from "lucide-react";
import PredefineSelectItem from "./PredefineSelectItem";
import ToolTip from "../ToolTip";

const predefinedDescriptions = [
  {
    label: "Software Engineer",
    sublabel: "Full Stack Developer",
    description:
      "Full Stack Developer with experience in React, Node.js, and cloud technologies",
  },
  {
    label: "Marketing Manager",
    sublabel: "Digital Marketing",
    description:
      "Digital Marketing professional with expertise in SEO, social media, and campaign management",
  },

  {
    label: "Data Analyst",
    sublabel: "Data Analyst",
    description:
      "Data Analyst with expertise in SQL, Python, and data visualization tools",
  },

  {
    label: "Product Manager",
    sublabel: "Product Manager",
    description:
      "Product Manager with expertise in agile development and user research",
  },

  {
    label: "UX/UI Designer",
    sublabel: "UX/UI Designer",
    description:
      "UX/UI Designer with expertise in user-centered design and modern design tools",
  },
];

const PredefineDescription = () => {
  return (
    <Drawer>
      <DrawerTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3 bg-transparent">
        <ToolTip content="Predefined Descriptions">
          <LayoutGrid className="h-4 w-4" />
        </ToolTip>
      </DrawerTrigger>
      <DrawerContent className="w-full max-w-3xl p-4 mx-auto">
        <DrawerHeader>
          <DrawerTitle>Predefined Descriptions</DrawerTitle>
          <DrawerDescription>
            Select a predefined description to use in your job description.
          </DrawerDescription>
        </DrawerHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 overflow-y-auto">
          {predefinedDescriptions.map((description) => (
            <PredefineSelectItem key={description.label} {...description} />
          ))}
        </div>

        {/* <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};

export default PredefineDescription;
