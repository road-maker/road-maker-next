// "use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./style.css";
const SearchBar = () => {
  const [searchContent, setSearchContent] = useState("");
  const router = useRouter();
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchContent.split("").filter((v) => v !== " ").length > 0) {
        router.replace(`/roadmap/posts/search/${searchContent}`);
      } else {
        alert("검색어를 입력해주세요.");
        setSearchContent("");
      }
    }
  };
  const searchIcon = (
    <FontAwesomeIcon
      className="hvr"
      icon={faMagnifyingGlass}
      // onClick={() => {
      //   searchContent.length === 0
      //     ? alert("내용을 입력해주세요")
      //     : alert("검색!");
      // }}
    />
  );

  return (
    <Input
      id="searchBar"
      className="w60"
      placeholder="로드맵 검색어를 입력해주세요."
      rightSection={searchIcon}
      value={searchContent}
      onKeyDown={handleKeyDown}
      onChange={(e) => setSearchContent(e.target.value)}
    />
  );
};

export default SearchBar;
