import type { IconType } from "react-icons";

import {
  HiArrowRight,
  HiArrowTopRightOnSquare,
  HiArrowUpRight,
  HiCalendarDays,
  HiEnvelope,
  HiOutlineDocument,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineLink,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiBookBookmarkDuotone,
  PiGridFourDuotone,
  PiHouseDuotone,
  PiImageDuotone,
  PiUserCircleDuotone,
} from "react-icons/pi";

import { RiNextjsLine } from "react-icons/ri";
import {
  SiAntdesign,
  SiAxios,
  SiFigma,
  SiJavascript,
  SiJenkins,
  SiNginx,
  SiReact,
  SiRedhat,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTurborepo,
  SiWebpack,
  SiZalo,
} from "react-icons/si";
import { TbBrandDocker, TbBrandTypescript, TbBrandVite, TbPuzzle } from "react-icons/tb";

import { FaCode, FaGitAlt } from "react-icons/fa";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaReddit,
  FaTelegram,
  FaThreads,
  FaWhatsapp,
  FaX,
  FaXTwitter,
} from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";
import { IoCodeSlashOutline, IoGitBranchOutline } from "react-icons/io5";
import { MdBuild } from "react-icons/md";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: RiNextjsLine,
  supabase: SiSupabase,
  figma: SiFigma,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
  redux: SiRedux,
  typescript: TbBrandTypescript,
  react: SiReact,
  puzzle: TbPuzzle,
  turborepo: SiTurborepo,
  rsbuild: GrDeploy,
  vite: TbBrandVite,
  webpack: SiWebpack,
  antd: SiAntdesign,
  tailwind: SiTailwindcss,
  docker: TbBrandDocker,
  jenkins: SiJenkins,
  redhat: SiRedhat,
  nginx: SiNginx,
  axios: SiAxios,
  git: FaGitAlt,
  "git-branch": IoGitBranchOutline,
  code: IoCodeSlashOutline,
  zalo: SiZalo,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
