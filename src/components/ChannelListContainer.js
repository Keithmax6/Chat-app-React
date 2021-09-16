import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
import LogoutIcon from "../assets/logout.png";
import Hos from "../assets/hos.png";

const cookies = new Cookies();

const Sidebar = ({ logout }) => {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={Hos} alt="Hospital" width="30" />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner" onClick={logout}>
          <img src={LogoutIcon} alt="logout " width="30" />
        </div>
      </div>
    </div>
  );
};

const CompanyHeader = () => {
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">Chat 2.0</p>
    </div>
  );
};

const ChannelListContainer = () => {
  const logout = () => {
    cookies.removes("token");
    cookies.removes("userId");
    cookies.removes("username");
    cookies.removes("fullName");
    cookies.removes("avatarUrl");
    cookies.removes("hashedPassword");
    cookies.removes("phoneNumber");

    window.location.reload();
  };
  return (
    <>
      <Sidebar logout={logout} />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="team"
              Preview={(previewProps) => (
                <TeamChannelPreview {...previewProps} type="team" />
              )}
            />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="messaging"
              Preview={(previewProps) => (
                <TeamChannelPreview {...previewProps} type="messaging" />
              )}
            />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
