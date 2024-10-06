declare type UserType = "creator" | "editor" | "viewer";

declare type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  color: string;
  usertype?: UserType;
};

declare type HeaderProps = {
  children: React.ReactNode;
  className?: string;
}
