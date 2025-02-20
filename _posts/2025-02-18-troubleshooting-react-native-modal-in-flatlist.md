---
title: "[트러블슈팅] React Native + Modal in FlatList"
description: React Native 프로젝트에서 FlatList 내 Modal을 사용하면서 발생한 문제를 해결한 과정에 대해 기록한 페이지입니다.
date: 2025-02-18 15:12:49 +0900
categories: [Front-end]
tags: [troubleshooting, typescript, react-native, mobile]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/react-native-logo.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br>
Troubleshooting, TypeScript, React Native, Mobile</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Environment</u></strong> <br />
OS: Windows 11 <br />
react-native v0.76.5 </p></blockquote>

## ✅ 개요

React Native 프로젝트에서 FlatList 내 Modal을 사용하면서 발생한 문제를 해결한 과정에 대해 기록한 페이지입니다.

## ❓ 문제

### ⚠️ 오류

<blockquote class="prompt-tip"><p><strong><u>Tips</u></strong> <br>
발생한 버그를 간략히 설명해 주세요.</p></blockquote>

다음 영상과 같이 Modal 내의 TextInput을 클릭하여 키보드가 올라오는 경우 일부 상황에서 Modal이 화면에서 사라지는 문제가 발생하였습니다.

<video width="360" controls>
<source src="/assets/video/front-end/troubleshooting-react-native-modal-in-flatlist/video1.webm" type="video/webm"/>
Your browser does not support the video format. Please try a different browser.
</video>

### 🖥️ 발생 환경

<blockquote class="prompt-tip"><p><strong><u>Tips</u></strong> <br>
운영체제, 브라우저, 의존성 목록 등을 작성해 주세요.</p></blockquote>

- OS: Android
- Galaxy S8+
- react-native v0.76.5

### 🕘 발생 일시

<blockquote class="prompt-tip"><p><strong><u>Tips</u></strong> <br>
버그가 발생한 날짜와 시간을 입력해 주세요. (Ex. 2024년 10월 1일, 오후 3시 30분)</p></blockquote>

- 2025년 2월 18일, 오후 2시 30분

## 📖 해결 과정

먼저 문제가 발생하는 상황에 대해 분석하였습니다. 문제 상황을 분석한 결과 Modal 컴포넌트를 포함하는 상위 컴포넌트가 TextInput을 클릭함으로써 키보드에 의해 가려질 때 Modal이 화면이 사라지는 것을 확인하였습니다. 이는 다음과 같이 `React Native`의 `FlatList`를 사용함으로써 발생한 문제였습니다.

```tsx
/* TourItemList.tsx */

import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { tw } from "@src/libs/tailwind";
import { TourItem } from "./TourItem";
import { useTourItemList } from "@src/hooks/tour/useTourItemList";

export const TourItemList = () => {
  const { tourItemList } = useTourItemList();

  return (
    <View
      style={tw.style(
        tourItemList.length === 0 ? "bg-white" : "bg-[#F3F3F3]",
        "flex h-full flex-col justify-center px-4"
      )}
    >
      <FlatList
        contentContainerStyle={tw`flex flex-col`}
        data={tourItemList}
        renderItem={({ item }) => <TourItem data={item} />}
        keyExtractor={(item) => item.plan.planId.toString()}
        ListEmptyComponent={
          <View style={tw`flex flex-col items-center gap-[1.125rem]`}>
            <Image
              style={tw`h-16 w-16`}
              source={require("@src/assets/tour/tour-empty.png")}
            />
            <Text>아직 저장된 여행이 없어요</Text>
          </View>
        }
      />
    </View>
  );
};
```

```tsx
/* TourItemMenu.tsx */

import { COLOR } from "@src/constants/color";
import { useTourItemDelete } from "@src/hooks/tour/useTourItemDelete";
import { tw } from "@src/libs/tailwind";
import React, { useState } from "react";
import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";
import { TourItemTitleModal } from "./TourItemTitleModal";

interface TourItemMenuProps {
  planId: number;
  planTitle: string;
}

export const TourItemMenu = ({ planId, planTitle }: TourItemMenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { isPending, handleDeleteButtonClick } = useTourItemDelete(
    planId,
    planTitle
  );

  return (
    <View style={tw`relative`}>
      {isPending ? (
        <ActivityIndicator style={tw`h-8 w-8`} color={COLOR.PRIMARY_GREEN} />
      ) : (
        <Pressable
          style={({ pressed }) =>
            tw.style(pressed && "bg-white", "rounded-lg p-1")
          }
          onPress={() => setMenuVisible((value) => !value)}
        >
          <Image
            style={tw`h-6 w-6`}
            source={require("@src/assets/common/menu-icon.png")}
          />
        </Pressable>
      )}
      {menuVisible && (
        <View
          style={tw`absolute right-1.5 top-8 z-10 flex w-20 flex-col rounded-lg bg-white shadow`}
        >
          <Pressable
            style={({ pressed }) =>
              tw.style(pressed && "bg-slate-100", "w-full")
            }
            onPress={() => {
              setMenuVisible(false);
              setModalVisible(true);
            }}
          >
            <Text style={tw`py-2.5 text-center`}>수정</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) =>
              tw.style(pressed && "bg-slate-100", "w-full")
            }
            onPress={() => {
              setMenuVisible(false);
              handleDeleteButtonClick();
            }}
          >
            <Text style={tw`py-2.5 text-center`}>삭제</Text>
          </Pressable>
        </View>
      )}
      <TourItemTitleModal
        planId={planId}
        title={planTitle}
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
    </View>
  );
};
```

`React Native`의 `FlatList`는 가상화된 리스트 컴포넌트로, 화면에 보이는 항목만 렌더링합니다. 이를 고려하였을 때 키보드가 올라오기 전에는 Modal을 포함하는 컴포넌트가 화면에 보이므로 Modal이 제대로 렌더링되지만, TextInput을 클릭함으로써 키보드가 올라왔을 때 키보드에 의해 Modal을 포함하는 컴포넌트가 화면에서 사라지면 해당 컴포넌트가 `언마운트(unmount)`되어 메모리에서 제거되고, Modal 역시 사라지는 문제였습니다.

즉, 이 문제를 해결하기 위한 핵심은 <b>키보드가 올라왔을 때 Modal을 포함하는 컴포넌트가 화면에서 사라지더라도 Modal의 렌더링 상태가 유지되어야 하는 것이었습니다.</b> 따라서 화면에 보이는 항목만 렌더링하는 `VirtualizedList`, `FlatList`, `SectionList`를 사용해서 리스트를 렌더링하는 것이 아니라, `ScrollView`와 `map` 메서드를 활용해서 리스트를 렌더링하도록 변경하면 문제를 해결할 수 있습니다.

`FlatList` 대신 `ScrollView`로 변경한 코드는 다음과 같습니다.

```tsx
/* TourItemList.tsx */

import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { tw } from "@src/libs/tailwind";
import { TourItem } from "./TourItem";
import { useTourItemList } from "@src/hooks/tour/useTourItemList";

export const TourItemList = () => {
  const { tourItemList } = useTourItemList();

  return (
    <ScrollView
      style={tw.style(
        tourItemList.length === 0 ? "bg-white" : "bg-[#F3F3F3]",
        "flex h-full flex-col px-4"
      )}
    >
      {tourItemList.length === 0 ? (
        <View style={tw`flex flex-col items-center gap-[1.125rem]`}>
          <Image
            style={tw`h-16 w-16`}
            source={require("@src/assets/tour/tour-empty.png")}
          />
          <Text>아직 저장된 여행이 없어요</Text>
        </View>
      ) : (
        tourItemList.map((item) => (
          <TourItem key={item.plan.planId} data={item} />
        ))
      )}
    </ScrollView>
  );
};
```

위와 같이 문제를 해결한 결과는 다음과 같습니다.

<video width="360" controls>
<source src="/assets/video/front-end/troubleshooting-react-native-modal-in-flatlist/video2.webm" type="video/webm"/>
Your browser does not support the video format. Please try a different browser.
</video>

## 📚 참고 자료

- <a href="https://reactnative.dev/docs/modal" target="_blank">Modal · React Native</a>
- <a href="https://reactnative.dev/docs/virtualizedlist" target="_blank">VirtualizedList · React Native</a>
- <a href="https://reactnative.dev/docs/flatlist" target="_blank">FlatList · React Native</a>
- <a href="https://mycodings.fly.dev/blog/2024-06-29-react-native-tutorial-8-list-rendering-flatlist-sectionlist" target="_blank">리액트 네이티브 강좌. 8편 - 리스트 렌더링하기 그리고 FlatList, SectionList 사용하기</a>
