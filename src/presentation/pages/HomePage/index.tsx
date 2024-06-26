import React, {FC, useState} from "react";
import {HomePageProps} from "./types";
import * as Styled from "./styled";
import {FaCheck} from "react-icons/fa";
import {useTheme} from "@emotion/react";
import './global.css'
import {AnnouncementsTitle} from "./styled";
import {Bell, Calendar, ChevronDown} from "lucide-react";
import RatingProgressBar from "./RatingProgressBar";
import {IoCheckmarkCircle} from "react-icons/io5";


export * from "./types";

/*
 Feel free to change this page however you wish
 You can divide this page into smaller components if you wish to

*/
export const HomePage: FC<HomePageProps> = (props) => {
    const {announcements, profile} = props;
    const theme = useTheme();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenDrop, setIsOpenDrop] = useState<boolean>(false);

    const toggleOpen = ():void => {
        setIsOpen(!isOpen);
    };

    const toggleOpenDrop = ():void => {
        setIsOpenDrop(!isOpenDrop)
    }


    return (
        <Styled.PageWrapper>
            <Styled.HeaderContainer>
                <div style={{width: '803px', color: theme.color.dark.tint, fontFamily: theme.font.default}}
                     className="font-bold flex h-6 text-lg">My Tipaw
                </div>

                <div style={{width: '75px', height: '32px'}}
                     className="flex items-center justify-center">
                    <div style={{
                        color: theme.color.blue.default,
                        fontFamily: theme.font.default,
                        height: '32px',
                        width: '31px'
                    }} className="flex items-center justify-center text-sm font-bold">Fr
                    </div>
                    <div style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: theme.color.blue.default
                    }}></div>
                    <div style={{
                        color: theme.color.medium.shade,
                        fontFamily: theme.font.default,
                        height: '32px',
                        width: '31px',
                    }}
                         className="flex items-center justify-center text-sm font-bold">Nl
                    </div>

                </div>
                <div className="w-12 h-12 flex items-center justify-center">
                    <Bell size={24} color={theme.color.medium.shade}/>
                </div>
                <div style={{
                    width: '178px',
                    fontFamily: theme.font.default,
                    fontSize: '14px',
                    color: theme.color.medium.shade
                }} className='h12 gap-2 flex items-center justify-center'>

                    <img className="h-10 w-10" style={{borderRadius: '50%'}} src={profile.avatar}
                         alt="some guy with a dog"/>
                    {profile.name}

                    <div className="h-10 w-10 flex items-center justify-center cursor-pointer">
                        <ChevronDown size={24} color={theme.color.medium.shade}  onClick={toggleOpenDrop}/>
                    </div>
                    {isOpenDrop && (
                        <div className="absolute z-10 right-50 top-16  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 3</a>
                            </div>
                        </div>
                    )}

                </div>
            </Styled.HeaderContainer>

            <Styled.ProfileContainer>
                <Styled.ProfileDescription>
                    <div className="h-6, w-full"
                         style={{color: theme.color.blue.default, fontSize: '18px', fontFamily: theme.font.default}}>
                        You successfully complete your profile at Tipaw
                    </div>

                    <div className="h-6 w-full"
                         style={{fontSize: '14px', fontFamily: theme.font.default}}>
                        Now you can use Tipaw for {profile.globalProgress}% 🎉
                    </div>
                </Styled.ProfileDescription>
                <div style={{width: '336px', height: '64px'}}>
                    <RatingProgressBar rating={profile.globalProgress}/>
                </div>
            </Styled.ProfileContainer>

            <Styled.ProgressContainer>

                <Styled.ProgressItem>
                    <FaCheck
                        color={theme.color.light.default}
                        size={24}
                        style={{background: theme.color.green.default, borderRadius: '50%'}}/>
                    <Styled.ProgressItemDescription>
                        <div
                            style={{
                                color: theme.color.dark.dark,
                                fontFamily: theme.font.default,
                                fontSize: '14px',
                                fontWeight: 'bold'
                            }}>Verification
                        </div>
                        <div style={{
                            fontSize: '12px',
                            color: theme.color.medium.shade,
                            fontFamily: theme.font.default
                        }}>You verified your account
                        </div>
                    </Styled.ProgressItemDescription>
                </Styled.ProgressItem>

                <Styled.ProgressItem>
                    <FaCheck
                        color={theme.color.light.default}
                        size={24}
                        style={{background: theme.color.green.default, borderRadius: '50%'}}/>
                    <Styled.ProgressItemDescription>
                        <Styled.ProgressItemDescriptionTitle>
                            Profile picture
                        </Styled.ProgressItemDescriptionTitle>
                        <div style={{
                            fontSize: '12px',
                            color: theme.color.medium.shade,
                            fontFamily: theme.font.default
                        }}>You added your profile picture
                        </div>
                    </Styled.ProgressItemDescription>
                </Styled.ProgressItem>

                <Styled.ProgressItem>
                    <FaCheck
                        color={theme.color.light.default}
                        size={24}
                        style={{background: theme.color.green.default, borderRadius: '50%'}}/>
                    <Styled.ProgressItemDescription>
                        <Styled.ProgressItemDescriptionTitle>
                            Parents
                        </Styled.ProgressItemDescriptionTitle>
                        <div style={{
                            fontSize: '12px',
                            color: theme.color.medium.shade,
                            fontFamily: theme.font.default
                        }}>You added the parents
                        </div>
                    </Styled.ProgressItemDescription>
                </Styled.ProgressItem>

                <Styled.ProgressItem>
                    <FaCheck
                        color={theme.color.light.default}
                        size={24}
                        style={{background: theme.color.green.default, borderRadius: '50%'}}/>
                    <Styled.ProgressItemDescription>
                        <Styled.ProgressItemDescriptionTitle>
                            Litter
                        </Styled.ProgressItemDescriptionTitle>
                        <div style={{
                            fontSize: '12px',
                            color: theme.color.medium.shade,
                            fontFamily: theme.font.default
                        }}>Your created the litter
                        </div>
                    </Styled.ProgressItemDescription>

                </Styled.ProgressItem>

            </Styled.ProgressContainer>

            <Styled.AnnouncementsContainer>
                <AnnouncementsTitle>
                    Announcements from TIPAW
                    <div style={{width: '10px', height: '10px', background: '#FF453E', borderRadius: '50%'}}></div>
                </AnnouncementsTitle>

                {announcements.map((announcement, index) => (
                    <Styled.AnnouncementContainerDescription isOpen={isOpen}>
                        <div
                            style={{
                                width: '100%',
                                height: '48px',
                                padding: '12px 24px',
                                background: theme.color.blue.default,
                                color: theme.color.light.default,
                                borderRadius: '8px 8px 0 0',
                                fontSize: '16px',
                                fontFamily: theme.font.default,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '8px',
                            }}

                        >
                            <div style={{ width: 'calc(100% - 24px)', height: '24px' }}>
                                {announcement.title}
                            </div>
                            <div className="h-6 w-6">
                                <ChevronDown size={24} color={theme.color.light.default} style={{cursor: 'pointer'}} onClick={toggleOpen}/>
                            </div>
                        </div>

                        {isOpen && (
                            <>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '48px',
                                        padding: '16px 24px',
                                        color: theme.color.blue.default,
                                        fontSize: '7px',
                                        fontFamily: theme.font.default,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                    }}
                                >
                                    <Calendar size={16} color={theme.color.blue.default} />
                                    {announcement.date}
                                </div>

                                <div
                                    style={{
                                        width: '100%',
                                        padding: '0 24px 16px 24px',
                                        fontSize: '16px',
                                        fontFamily: theme.font.default,
                                        color: theme.color.medium.shade,
                                    }}
                                >
                                    {announcement.content}
                                </div>
                            </>
                        )}
                    </Styled.AnnouncementContainerDescription>
                ))}
            </Styled.AnnouncementsContainer>
        </Styled.PageWrapper>
    );
};
