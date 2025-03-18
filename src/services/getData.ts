import { DATA_URL, ROTATION_URL } from "@/constants/apiUrl";
import { Champion } from "@/types/Champions";
import { RotationData } from "@/types/Rotations";

export const getItemData = async () => {
  const response = await fetch(`${DATA_URL}/item.json`, {
    cache: "force-cache"
  });
  const { data } = await response.json();
  return data;
};

export const getChampionData = async () => {
  const response = await fetch(`${DATA_URL}/champion.json`, {
    next: {
      revalidate: 86400
    }
  });
  const { data } = await response.json();
  return data;
};

export const getChampionDetail = async (id: string) => {
  const response = await fetch(`${DATA_URL}/champion/${id}.json`, {
    cache: "no-store"
  });
  const { data } = await response.json();

  return data;
};

export const getRotationData = async (headers: HeadersInit) => {
  const response = await fetch(ROTATION_URL, {
    headers
  });
  const data: RotationData = await response.json();

  return data;
};

export const getRotationForAllData = async (): Promise<{
  rotationListForAll: Champion[];
}> => {
  const response = await fetch("/api/rotation-alluser");
  const data = await response.json();
  return data;
};
