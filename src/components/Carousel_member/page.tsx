import Image from "next/image";

export default function CarouselSpacing() {
  const members = [
    { src: "https://cmmworkspace.blob.core.windows.net/cmmsource/Member/Chanin.png?sv=2023-01-03&st=2025-03-12T04%3A54%3A14Z&se=2029-02-13T04%3A54%3A00Z&sr=b&sp=r&sig=GKljVSkiTD1sCJKB34AyocJw7kZgAvw2U%2FRl0IH6e58%3D", name: "Chanin" },
    { src: "https://cmmworkspace.blob.core.windows.net/cmmsource/Member/Alisa.png?sv=2023-01-03&st=2025-03-12T04%3A58%3A16Z&se=2029-10-13T04%3A58%3A00Z&sr=b&sp=r&sig=jzGsUEH%2FlexqASEjnVeW0%2FTNg%2F73tRSUgw9WAN%2F5kYs%3D", name: "Alisa" },
    { src: "https://cmmworkspace.blob.core.windows.net/cmmsource/Member/Suriyong.png?sv=2023-01-03&st=2025-03-12T05%3A06%3A26Z&se=2029-06-13T05%3A06%3A00Z&sr=b&sp=r&sig=NgDhe2RS3l5bDlKliffeJWqnMi4UbnB9GlE1x1VZsV8%3D", name: "Suriyong" },
    { src: "https://cmmworkspace.blob.core.windows.net/cmmsource/Member/Kanittha.png?sv=2023-01-03&st=2025-03-12T04%3A57%3A43Z&se=2029-03-13T04%3A57%3A00Z&sr=b&sp=r&sig=VVzdEahsuQ%2FRufd3gIPGSd7m998qMf9%2FFFurK%2FMu9r0%3D", name: "Kanittha" },
    { src: "https://cmmworkspace.blob.core.windows.net/cmmsource/Member/Waiyawat.png?sv=2023-01-03&st=2025-03-12T05%3A00%3A07Z&se=2029-09-13T05%3A00%3A00Z&sr=b&sp=r&sig=g5xUkUbFuZTzNYtV07moUOEOpKWYS6mNAvuw0K%2BUrro%3D", name: "Waiyawat" },
    { src: "https://cmmworkspace.blob.core.windows.net/cmmsource/Member/Nuttaphong.png?sv=2023-01-03&st=2025-03-12T05%3A01%3A05Z&se=2029-09-13T05%3A01%3A00Z&sr=b&sp=r&sig=NLxzbTgYVstsFwH4pBJqkUcYUK%2F6bJtyiH%2FP7RgitxY%3D", name: "Nuttaphong" },
    { src: "https://cmmworkspace.blob.core.windows.net/cmmsource/Member/Jiruth.png?sv=2023-01-03&st=2025-03-12T05%3A01%3A30Z&se=2029-09-13T05%3A01%3A00Z&sr=b&sp=r&sig=%2FlSja0LVEofQIzNbTti02B9EM7qFTVuGHxwjT2BFnBo%3D", name: "Jiruth" },
    { src: "https://cmmworkspace.blob.core.windows.net/cmmsource/Member/Naphatsanan.png?sv=2023-01-03&st=2025-03-12T05%3A00%3A41Z&se=2029-11-13T05%3A00%3A00Z&sr=b&sp=r&sig=AEbiRGwgkN8z2kwyw8uGRGE3gVrYCdkCKIgI6fqmXSg%3D", name: "Naphatsanan" },
    { src: "https://cmmworkspace.blob.core.windows.net/cmmsource/Member/Oraya.png?sv=2023-01-03&st=2025-03-12T05%3A05%3A16Z&se=2029-09-13T05%3A05%3A00Z&sr=b&sp=r&sig=cUH8QerSBzDH%2FUSQxmN4OTdMpq144RkqPc%2BLa%2FZt%2FRA%3D", name: "Oraya" },
    { src: "https://cmmworkspace.blob.core.windows.net/cmmsource/Member/Sarut.png?sv=2023-01-03&st=2025-03-12T04%3A58%3A52Z&se=2029-11-13T04%3A58%3A00Z&sr=b&sp=r&sig=eu2f3xZSICqQXqgpPVmVClZB0WjhbW2oYIfxOxfgXhA%3D", name: "Sarut" }
  ];

  return (
    <div className="flex flex-col gap-10">
          <h1 className="text-[3vw] text-white">หัวหน้าสาขาวิชา</h1>
      <div className="grid grid-cols-3">
        <div className="relative group overflow-hidden rounded-lg">
          <img className="w-full transition duration-300 group-hover:blur-md" src={members[0].src} alt={members[0].name} />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <p className="absolute top-14 left-14 text-white text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">อาจารย์</p>
          <p className="absolute bottom-14 left-14 text-white text-6xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">{members[0].name}</p>
        </div>
      </div>

      <h1 className="text-[3vw] text-white">คณาจารย์</h1>
      <div className="grid grid-cols-3 gap-10">
        {members.slice(1, 8).map((member, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <img className="w-full transition duration-300 group-hover:blur-md" src={member.src} alt={member.name} />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <p className="absolute top-14 left-14 text-white text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">อาจารย์</p>
            <p className="absolute bottom-14 left-14 text-white text-6xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">{member.name}</p>
          </div>
        ))}
      </div>

        <h1 className="text-[3vw] text-white">ฝ่ายสนับสนุน</h1>
      <div className="grid grid-cols-3 gap-10 justify-center">
        {members.slice(8).map((member, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <img className="w-full transition duration-300 group-hover:blur-md" src={member.src} alt={member.name} />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <p className="absolute top-14 left-14 text-white text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">อาจารย์</p>
            <p className="absolute bottom-14 left-14 text-white text-6xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
