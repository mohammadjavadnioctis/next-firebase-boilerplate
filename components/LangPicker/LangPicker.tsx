import React, { FC, forwardRef, useEffect, useRef, useState } from "react";
import { Group, Avatar, Text, Select, createStyles, em, getBreakpointValue } from "@mantine/core";
import turkeyFlag from "~/public/icons/countryFlags/turkey.svg";
import { useRouter } from "next/router";
import { UiPopover } from "@/lib";
import { useDisclosure } from "@mantine/hooks";
import { useClickOutside } from "@/utils/hooks";
import useIsMobile from "@/utils/hooks/useIsMobile";
// import {usePathname} from 'next-intl/client';
import ChevronDownIcon from '@/assets/images/icons/chebron-down.svg'
import { LocalesType } from "@/utils/types";


interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
  description: string;
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: "orange !important",
    color: "white",
  },
  input: {
    backgroundColor: "transparent !important",
    color: "white",
  },
  rightSection: {
    cursor: "pointer",
  },
  dropDown: {
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.lg) - 1)})`]: {
      left: '20px !important'
      
    },
  }
}));

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => {
    return (
      <div ref={ref} {...others}>
        <Group noWrap>
          {/* <Avatar src={image} /> */}
          <img
            src={image}
            className="w-8 h-6"
            // @ts-ignore
            crossOrigin="anonymous"
          />

          <div>
            <Text size="sm">{label}</Text>
            <Text size="xs" color="dimmed">
              {description}
            </Text>
          </div>
        </Group>
      </div>
    );
  }
);


  SelectItem.displayName = "SelectItem";


const LangSelect: FC = () => {
  const [lang, setLang] = useState<string>("en");
  const [activelangFlag, setActivelangFlag] = useState('/images/unitedKingdomFlag.png')
  const [opened, setOpened] = useState(false);
  const router = useRouter()
  const { locale, pathname } = router
  const { classes } = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);
//   const { locale } = router

  const isMobile = useIsMobile()

  const close = () => {
    setOpened(false)
  }

  const open = () => {
    setOpened(true)
  }

  const handleLangChange = (e: "en" | "tr") => {
    close()
    close()
    setLang((prevLang) => e);
    router.push(`${router.asPath}`, undefined, { locale: e });
    const flag = data.filter(item => item.value === lang)[0]?.image
   
  };

  const handleClickOutside = () => {
     close()
  } 

  useClickOutside(inputRef, handleClickOutside)

  const clickOntheInput = () => {
    inputRef?.current?.click();
  };

  const handleClick = () => {
    opened ? close() : open()
  }


  const ActiveLang = data.filter(lang => lang.value === locale)[0]
  

  useEffect(() => {

    const flag = data.filter(item => item.value === lang)[0]?.image
    setActivelangFlag(flag)
   
    
   }, 
   [lang, locale] )
  return (
    <div className="inline-flex justify-end z-[1000]" ref={inputRef}>
      {/* <NativeSelect
        value={lang}
        onChange={(event) => setLang(event.currentTarget.value)}
        data={["English", "فارسی", "русский", "العربية"]}
        rightSection={<IconChevronDown size={14} />}
        classNames={{
          wrapper: classes.wrapper,
          input: classes.input,
        }
      /> */}
      <UiPopover position={isMobile ? "bottom-end" : "bottom"} withArrow arrowOffset={200} shadow="md" opened={opened} classNames={{dropdown: classes.dropDown}}>
        <UiPopover.Target>
            <button className=" h-[28px] bg-[#F0CDCD] px-2 py-1 rounded-[56px] text-sm font-semibold text-white flex items-center justify-center" onClick={handleClick}>
            <img src={activelangFlag} alt='active language flag' className="w-5 h-5 mr-2 rounded-full" loading="eager" />
            <ChevronDownIcon />
            {/* <span>
                {ActiveLang.label}
            </span> */}
            
            </button>
        </UiPopover.Target>
        <UiPopover.Dropdown className="">
            <div className="grid grid-cols-2 gap-8 gap-x-12 md:gap-x-8 p-2 w-52">
                {
                    data.map(lang => {
                        const {label, value, description, image} = lang;
                        return (
                            <div className="flex space-x-2 cursor-pointer" onClick={() => {handleLangChange(value as "en" | "tr")}} key={value}>
                                <img src={image} alt={label} className="w-5 h-5 rounded-full overflow-hidden" loading="eager"/>
                                <span className="text-xs font-medium">{label}</span>
                            </div>
                        )
                    })
                }          
            </div>
        </UiPopover.Dropdown>
      </UiPopover>
    </div>
  );
};


interface LangDataType {
  image: string
  label: string,
  value: LocalesType,
  description?: string 
}

const data: LangDataType[] = [
  {
    image: "https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2FunitedKingdomFlag.png?alt=media&token=0ed20bf6-6b2d-4815-9fb3-514f72d78ad9",
    // image: "https://countryflagsapi.com/png/united kingdom",
    label: "English",
    value: "en",
    description: "",
  },

  {
    image: "https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2FturkeyFlag.svg?alt=media&token=1e802525-0607-47fa-b03f-c6f0d4c86ea9",
    // image: "https://countryflagsapi.com/svg/turkey",
    label: "Türkçe",
    value: "tr",
    description: "",
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fru.png?alt=media&token=8f971c71-5e3f-4abd-9c79-4d12a449795c",
    // image: "https://countryflagsapi.com/svg/ru",
    label: "русский",
    value: "ru",
    description: "",
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2FiranFlag.svg?alt=media&token=d291ee7f-6d7c-4aee-b91b-a2bb7dfe1c8a",
    // image: "https://countryflagsapi.com/svg/iran",
    label: "فارسی",
    value: "fa",
    description: "",
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fsa.png?alt=media&token=78ff2675-5fd7-4855-a4e8-ec1055abdd9d",
    label: "العربية",
    value: "ar",
    description: "",
  },
];


  LangSelect.displayName = "LangSelect";


export default LangSelect;
