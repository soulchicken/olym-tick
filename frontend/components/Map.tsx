"use client";

import React, { useEffect } from "react";

const NaverMap = () => {
  useEffect(() => {
    const initMap = () => {
      if (!window.naver || !window.naver.maps) return;

      const map = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(37.56825004, 126.8972437),
        zoom: 10,
        mapTypeId: naver.maps.MapTypeId.SATELLITE,
        // 마포 월드컵 경기장 : 37.56825004, 126.8972437
        // 서울 숲 : 37.543574174, 127.044727503
      });

      // 마커 추가 예시
      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.56825004, 126.8972437),
        map,
      });

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.543574174, 127.044727503),
        map,
      });
    };

    // 네이버 지도 API 로드가 완료되면 지도 초기화
    if (!window.naver) {
      const script = document.createElement("script");
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=6pgkaehbt0`;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100%" }} />
    </>
  );
};

export default NaverMap;
