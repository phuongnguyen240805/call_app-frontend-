import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { useQuery } from "@tanstack/react-query";
import { getStreamToken } from "../lib/api";

import {
  Channel,
  ChannelHeader,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";

import ChatLoader from "../components/ChatLoader";
import CallButton from "../components/CallButton";

const STREAM_API_KEY = import.meta.env.VITE_STREAM_API_KEY;

const ChatPage = () => {
  const { id: targetUserId } = useParams();

  // Fake data for chatClient
  const [chatClient, setChatClient] = useState({
    user: {
      id: "fakeUserId",
      name: "Fake User",
      image: "https://i.pravatar.cc/150?img=3",
    },
    connectUser: async () => {},
    channel: () => ({
      watch: async () => {},
    }),
  });
  // Tạo dữ liệu giả cho channel
  const [channel, setChannel] = useState({
    id: "fakeChannelId",
    data: {
      members: ["fakeUserId", "fakeFriendId"],
      name: "Fake Channel",
    },
    watch: async () => {},
  });
  const [loading, setLoading] = useState(false);

  const handleVideoCall = () => {
      toast.success("Video call link sent successfully!");
    }

  // if (loading || !chatClient || !channel) return <ChatLoader />;

  return (
    <div className="h-[93vh]">
      <Chat client={chatClient}>
        <Channel channel={channel}>
          <div className="w-full relative">
            <CallButton handleVideoCall={handleVideoCall} />
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput focus />
            </Window>
          </div>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
};
export default ChatPage;
