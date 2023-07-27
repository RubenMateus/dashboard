import {
  CalendarIcon,
  CaretSortIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  GitHubLogoIcon,
  MoonIcon,
  PlusCircledIcon,
  SunIcon,
} from "@radix-ui/react-icons"

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  sun: SunIcon,
  moon: MoonIcon,
  calendar: CalendarIcon,
  gitHub: GitHubLogoIcon,
  caretSort: CaretSortIcon,
  check: CheckIcon,
  plusCircled: PlusCircledIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
}
