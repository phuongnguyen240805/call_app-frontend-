import { Link } from "react-router";
import { LANGUAGE_TO_FLAG } from "../constants";

const FriendCard = ({ friend }) => {
  return (
    <div className="card bg-base-200 hover:shadow-md transition-shadow h-full min-h-[230px] flex flex-col">
      <div className="card-body p-4 flex flex-col h-full">
        {/* USER INFO */}
        <div className="flex items-center gap-3 mb-3">
          <div className="avatar size-12 shrink-0">
            <img src={friend.profilePic} alt={friend.fullName} />
          </div>
          <h3 className="font-semibold truncate">{friend.fullName}</h3>
        </div>

        <div className="flex flex-row gap-2 mb-3 min-h-[32px] items-center">
          <span className="badge badge-secondary text-xs flex items-center whitespace-nowrap">
            {getLanguageFlag(friend.nativeLanguage)}
            <span className="ml-1 truncate">Native: {friend.nativeLanguage}</span>
          </span>
          <span className="badge badge-outline text-xs flex items-center whitespace-nowrap">
            {getLanguageFlag(friend.learningLanguage)}
            <span className="ml-1 truncate">Learning: {friend.learningLanguage}</span>
          </span>
        </div>

        <div className="flex-grow" />
        <Link to={`/chat/${friend._id}`} className="btn btn-outline w-full mt-auto">
          Nhắn tin
        </Link>
      </div>
    </div>
  );
};
export default FriendCard;

export function getLanguageFlag(language) {
  if (!language) return null;

  const langLower = language.toLowerCase();
  const countryCode = LANGUAGE_TO_FLAG[langLower];

  if (countryCode) {
    return (
      <img
        src={`https://flagcdn.com/24x18/${countryCode}.png`}
        alt={`${langLower} flag`}
        className="h-3 mr-1 inline-block"
      />
    );
  }
  return null;
}
