"use client";

import { useRouter } from "next/navigation";
import Script from "next/script";
import React, { useEffect } from "react";

const NaverMap = () => {
  const router = useRouter();
  useEffect(() => {
    const initMap = () => {
      if (!window.naver || !window.naver.maps) return;

      const { naver } = window;

      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.56825004, 126.8972437), // 마포 월드컵 경기장
        zoom: 12,
        mapTypeId: naver.maps.MapTypeId.SATELLITE,
      });

      // 좌표 배열
      const locations = [
        {
          name: "마포 월드컵 경기장",
          lat: 37.56825004,
          lng: 126.8972437,
          url: "/olym-tick/remind/bridge",
        },
        {
          name: "평화공원",
          lat: 37.56249,
          lng: 126.89519,
          url: "/olym-tick/remind/village",
        },
        {
          name: "서울 숲",
          lat: 37.543574174,
          lng: 127.044727503,
          url: "/olym-tick/remind",
        },
      ];

      locations.forEach((location) => {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(location.lat, location.lng),
          map,
          title: location.name,
        });
        const path = locations.map(
          (loc) => new naver.maps.LatLng(loc.lat, loc.lng)
        );

        new naver.maps.Polyline({
          map,
          path,
          strokeColor: "#EE334E", // 선 색상
          strokeWeight: 4, // 선 두께
          strokeStyle: "solid", // 선 스타일
        });
        // InfoWindow 생성
        const infoWindow = new naver.maps.InfoWindow({
          content: `<div style="padding: 5px; font-size: 14px;">${location.name}</div>`,
          disableAutoPan: true, // 마우스 오버 시 지도 이동 방지
        });

        // 마우스 오버/아웃 이벤트 처리
        naver.maps.Event.addListener(marker, "mouseover", () => {
          infoWindow.open(map, marker);
        });

        naver.maps.Event.addListener(marker, "mouseout", () => {
          infoWindow.close();
        });

        // 마커 클릭 이벤트
        naver.maps.Event.addListener(marker, "click", () => {
          // alert(`${location.name} 마커를 클릭했습니다!`);
          router.push("/olym-tick/remind/village");
        });
      });
    };

    // 지도 API 로드 및 초기화
    if (!window.naver) {
      const script = document.createElement("script");
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return (
    <>
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}&submodules=geocoder`}
        strategy="afterInteractive"
      />
      <div id="map" style={{ width: "100%", height: "500px" }} />
    </>
  );
};

export default NaverMap;
