export interface ModalOverlayProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
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
