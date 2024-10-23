import {
  Avatar,
  AvatarGroup,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";

interface EventModalI {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
  name: string;
  date: string;
}
export default function EventModal({
  isOpen,
  onClose,
  onOpenChange,
  name,
  date,
}: EventModalI): JSX.Element {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="lg"
      className="bg-white dark:bg-bgDark"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          <span className="text-xl text-black font-medium dark:text-white">
            {name}
          </span>
          <span className="text-sm text-gray2 dark:text-white">{date}</span>
        </ModalHeader>
        <ModalBody>
          <p className="text-lg text-gray2 dark:text-white">
            Event Description
          </p>
          <div className="py-3 space-y-6">
            <AvatarGroup isBordered>
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
            </AvatarGroup>
            <div>
              <p className="text-base text-gray2 dark:text-white">
                3 Guest Speakers: Speaker name A, Speaker name B, Speaker name
                C.
              </p>
              <p className="text-base text-gray2 dark:text-white">
                300 Attendees
              </p>
            </div>
          </div>
        </ModalBody>
        <div className="bg-blueLight dark:bg-grayLight w-full px-4 py-6 flex justify-between items-center">
          <Button
            variant="bordered"
            className="border-primaryLight bg-white text-gray font-bold"
            onPress={onClose}
          >
            Edit
          </Button>
          <div className="flex gap-3 items-center">
            <Button
              variant="solid"
              className="bg-danger text-white font-bold"
              onPress={onClose}
            >
              Delete
            </Button>
            <Button
              variant="solid"
              className="bg-primary text-white font-bold"
              onPress={onClose}
            >
              Mark as completed
            </Button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
