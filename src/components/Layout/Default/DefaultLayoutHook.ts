import { ReactNode, useState } from "react"
import { ClickParam } from "antd/lib/menu";
import { useRouter } from 'next/router';

export type DefaultLayoutProps = {
  children: ReactNode
  pageTitle: string;
  title: string;
  desc: string;
  selectedMenu: string[];
}

const useDefaultLayoutElement = ({
  selectedMenu,
}: DefaultLayoutProps) => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState<string[]>(selectedMenu);
  const [switchMenu, setSwitchMenu] = useState<boolean>(false);

  return {
    selectedKey,
    switchMenu,
    handleOnClick: (e: ClickParam): void => {
      setSwitchMenu(true);
      setSelectedKey([e.key]);
      router.push('/' + e.key);
    }
  }
}

export {
  useDefaultLayoutElement,
}
