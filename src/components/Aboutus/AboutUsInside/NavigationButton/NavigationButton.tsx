import { Stack, Button, Image, Skeleton, IconButton } from "@chakra-ui/react";
import {
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogCloseTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { X } from "lucide-react";

const Links = [
  {
    name: "Teachers and Convenor",
    imageurl: "https://e3drhrp76t.ufs.sh/f/FC5XEMhJbGcVBVYS9beHneF8byZuphU4IKrRsgqEM29dz7ik",
  },
  {
    name: "Members and Core Team",
    imageurl: "#",
  },
];

const NavigationButtons = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleOpen = (imageUrl: string, name: string) => {
    setSelectedImage(imageUrl);
    setSelectedName(name);
    setImageLoaded(false);
    setOpen(true);
  };

  return (
    <>
      <Stack direction={["column", "row"]}>
        {Links.map((link) => (
          <Button
            key={link.name}
            variant="outline"
            borderRadius="full"
            width={["100%", "250px"]}
            onClick={() => handleOpen(link.imageurl, link.name)}
            aria-label="Open Image"
          >
            {link.name}
          </Button>
        ))}
      </Stack>

      <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)} size={"lg"} placement={"center"}>
        <DialogContent rounded={"xl"}>
          <DialogHeader>
            <DialogTitle>{selectedName}</DialogTitle>
          </DialogHeader>
          <DialogBody>
            {!imageLoaded && <Skeleton height="350px" width="100%" />}
            {selectedImage && (
              <Image
                src={selectedImage}
                alt={selectedName}
                w="full"
                borderRadius="md"
                display={imageLoaded ? "block" : "none"}
                onLoad={() => setImageLoaded(true)}
              />
            )}
          </DialogBody>
          <DialogFooter>
            <DialogCloseTrigger>
              <IconButton variant="ghost" onClick={() => setOpen(false)} aria-label="Close"><X /></IconButton>
            </DialogCloseTrigger>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default NavigationButtons;
