export interface ModalOverlayProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ModalOverlay = ({
  children,
  className,
  onClick,
}: ModalOverlayProps) => {
  return (
    <div className={`modal__overlay ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};
