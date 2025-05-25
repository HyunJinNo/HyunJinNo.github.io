---
title: 면접 예상 질문
description: 면접 예상 질문에 대해 정리한 페이지입니다.
date: 2025-05-24 15:13:00 +/-TTTT
categories: [기타]
tags: [interview]
math: true
toc: true
pin: false
image:
  path: /assets/img/cs/study.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br>
Interview</p></blockquote>

## 개요

면접 예상 질문에 대해 정리한 페이지입니다.

## 예상 질문

<details>
<summary><code class="language-plaintext highlighter-rouge">#1</code> 요즘 IT 트렌드는 무엇이라고 생각하나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 기술적 관심도, 시장 감각, 그리고 업계 변화에 대한 민감도를 평가하기 위한 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
최근 IT 트렌드는 <b>생성형 AI</b>라고 생각합니다. ChatGPT, Copilot, DeepSeek처럼 실무에서 활용 가능한 도구들이 등장하면서 개발 생산성이 크게 향상되고 있기 때문입니다. 단순 코드 작성부터 문서화, 테스트 코드 작성까지 다양한 영역에서 활용할 수 있어서 주목하고 있습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#2</code> 가장 기억에 남는 프로젝트는 무엇인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
단순히 경험을 묻는 것이 아니라, 지원자의 문제 해결 능력, 기여도, 성장한 점 등을 확인하려는 의도입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
가장 기억에 남는 프로젝트는 혼자 여행하는 사람들을 위한 여행 종합 플랫폼 프로젝트입니다. 이 프로젝트는 혼자 여행하는 사람들을 위한 여행 정보 및 팁을 쉽게 공유하는 기능과, 평소에 혼자 즐기기 어려웠던 취미와 활동에 대해 모임을 생성하고 참여할 수 있는 기능을 제공하는 것을 목표로 하는 프로젝트였습니다. <br />
<br />
이 프로젝트의 멤버는 총 5명이었고, 저는 프론트엔드 개발을 맡아 여행 정보 글 CRUD 기능을 구현하는 데 집중하였습니다. 또한 반응형 웹 구현, 공통 컴포넌트 관리 등을 수행하였습니다. 프로젝트를 수행하면서 마주쳤던 문제로, 처음에는 이미지 파일 용량으로 인해 여행 정보 글 등록에 걸리는 시간이 오래 걸리는 문제가 있었지만, 백엔드를 맡은 팀원과의 협업으로 이미지 등록 API를 별도로 분리하여 글 등록이 완료되는데 최대 10초 이상 걸리는 시간을 1초 이내로 단축하여 문제를 해결할 수 있었습니다. <br />
<br />
이 과정에서 사용자 경험을 고려한 개발과, 백엔드 팀원과의 원활한 의사소통의 중요성, 협업을 통한 문제 해결 과정을 이해할 수 있었습니다. 이 경험이 제가 지원한 직무에서도 강점으로 발휘할 수 있을 것이라 생각합니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#3</code> 프로젝트를 하면서 실패한 경험이 있나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
단순히 실수나 실패 사례를 묻는 게 아니라, <b>실패 이후의 대응력, 자기 성찰 능력, 성장 과정</b>을 보려는 의도입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
네, 프로젝트를 하면서 실패한 경험이 있습니다. <br />
<br />
혼자 여행하는 사람들을 위한 여행 종합 플랫폼 프로젝트에서, 저는 여행 정보 글의 CRUD 기능을 구현하는 역할을 맡았는데, 처음에는 글 등록과 이미지 업로드를 동시에 처리하는 방식으로 구현하였습니다. 해당 방식으로 구현한 결과 기능이 정상적으로 동작하기는 했지만, 용량이 큰 이미지를 여러 개 업로드하는 경우 여행 정보 글 등록 시간이 오래 걸리는 문제가 있었습니다. <br />
<br />
문제의 원인을 확인한 후, 저는 사용자 시나리오를 고려하여 이미지 업로드 중 게시글 내용을 작성할 수 있도록 API를 분리하면 사용자 경험을 개선할 수 있다는 점을 파악하였습니다. 이에 백엔드 팀원과 협의하여 이미지 업로드 API를 별도로 분리하여 글 등록이 완료되는데 최대 10초 이상 걸리는 시간을 1초 이내로 단축하여 사용자 경험을 개선할 수 있었습니다. <br />
<br />
이 경험을 통해, <b>처음부터 성능과 사용자 경험을 고려한 개발의 중요성, 그리고 문제를 빠르게 파악하고 팀원과 협업하여 해결하는 과정의 중요성</b>을 배울 수 있었습니다. 이후에는 어떤 기능을 개발할 때 사용자 시나리오를 충분히 고려하는 자세를 가지게 되었고, 설계 단계에서 백엔드 팀원과 충분히 상의하는 것을 원칙으로 하고 있습니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#4</code> 지금까지 한 공부 중에서 가장 관심이 있는 분야는 무엇이었나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문의 핵심은 <b>지원자의 흥미와 몰입도</b>, 그리고 <b>자기주도적 학습 경험</b>을 파악하는 것입니다. 단순히 “재밌었다”가 아니라, <b>왜 흥미를 느꼈는지, 무엇을 배우고 어떻게 활용했는지</b>, 그리고 <b>앞으로의 계획</b>까지 자연스럽게 이어지면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
지금까지 공부한 것 중 가장 흥미로웠던 분야는 <b>WebP와 AVIF 같은 최신 이미지 포맷</b>에 대한 내용입니다. <br />
<br />
처음에는 제 블로그에 사용할 이미지 용량을 줄이기 위한 방법을 찾다가 WebP를 접하게 되었고, 이후에는 브라우저 호환성이 조금 떨어지더라도 WebP보다 더 압축률이 좋은 AVIF에 대해 알게 되었습니다. 실제로 블로그에서 사용하던 이미지 포맷을 WebP와 AVIF로 변경하면서 이미지 용량이 크게 줄어든 것을 확인할 수 있었고, 웹 페이지 로딩 속도가 크게 향상되었음을 확인할 수 있었습니다. <br />
<br />
이를 통해 이미지 포맷이 웹 페이지 성능과 사용자 경험에 직결되는 기술이라는 점에서 흥미를 느꼈습니다. 또한 이 경험을 계기로 웹 성능과 관련된 기술에 대해 흥미를 갖게 되었고, 앞으로도 웹 페이지 성능 최적화 측면에서 많은 신경을 쓰고자 노력하고 있습니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#5</code> 지원 동기 및 입사 포부를 말해주세요. (=왜 이 직무에 지원했으며, 여기서 무엇을 하고 싶나요?) (=왜 다른 회사 말고 저희 회사에 지원했나요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 관심도, 조직 적합도, 성장 의미를 확인하는 핵심 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 사용자 경험과 웹 성능 최적화에 깊은 관심을 가지고 프론트엔드 개발을 중심으로 역량을 쌓아왔습니다. 특히 지속적으로 발전하는 개발자의 삶을 지향하여 꾸준히 개발 공부를 진행해왔고, 학습한 내용을 꾸준히 블로그에 정리해 왔습니다. 이와 관련해 한화시스템이 가진 가치관 중 하나인, 과거의 성과에 안주하지 않고 미래를 선제적으로 대비하고 발전하고자 하는 회사의 가치관에 큰 매력을 느꼈습니다. 이에 개인의 성장과 더불어 한화시스템이 미래에 이뤄낼 성과에 기여하고 싶어서 지원하게 되었습니다. <br />
<br />
입사하게 된다면, 먼저 주어진 업무에 빠르게 적응하고 책임감을 가지고 직무를 수행하여 팀에 기여하겠습니다. 또한 개발자로서 끊임없이 신기술을 익히고 적용하며 성장하도록 노력하겠습니다. 또한 사람들에게 최고의 서비스를 제공하기 위해 타인의 피드백을 적극적으로 수용하여 사람들이 사용하기 쉬운 서비스를 제공할 수 있도록 노력하겠습니다. 제가 가진 역량과 문제 해결 능력을 바탕으로 회사에 기여하겠습니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#6</code> 전공 과목 중에서 가장 좋아하는 과목이 무엇인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>지식 기반뿐 아니라 흥미, 태도, 논리적 사고 방식</b>을 함께 파악하기 위한 질문입니다. 따라서 단순히 과목명을 말하기보다는 <b>왜 그 과목을 좋아했는지, 무엇을 배웠고 어떻게 활용했는지</b>까지 이야기해주는 것이 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
전공 과목 중에서 “오픈소스SW프로젝트” 과목을 가장 좋아했습니다. <br />
<br />
이 과목은 Git과 GitHub를 활용하여 팀 프로젝트로 SnakeGame을 만들어보는 전공 과목이었습니다. 해당 과목을 통해 단순히 기능을 구현하는 것을 넘어서, 팀원들과 효율적으로 협업하고 코드를 관리하는 방법을 배울 수 있었습니다. 이전까지는 혼자 개발하는 경우가 많았기 때문에, 하나의 큰 결과물을 팀으로 만들어 나가는 과정 자체가 저에게 인상 깊은 경험이었습니다. <br />
<br />
이 경험 이후 좀 더 협업을 잘하는 방법에 대해 관심이 생겼고, 팀원들과의 원활한 협업을 위해 Notion 작성, GitHub Wiki 작성 등 문서화에도 지속적으로 관심을 갖게 되는 계기가 되었습니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#7</code> 마지막으로 하고 싶은 말이나 질문이 있나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
면접의 마무리 단계에서 <b>지원자의 태도, 관심도, 소통 능력</b>을 확인하기 위한 질문입니다. 가장 좋은 답변은 <b>긍정적인 인상으로 마무리하면서, 회사나 직무에 대한 진정한 관심을 드러내는 질문이나 감사의 표현</b>을 포함하는 것입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
오늘 면접을 준비하면서 회사의 비전과 미래 지향점, 성장 가능성 등에 대해 알 수 있었습니다. 오늘 면접을 보면서 긴장도 많이 됐는데 편한 분위기에서 면접을 볼 수 있도록 배려해주셔서 감사합니다. 오늘 이후에도 다시 뵐 수 있는 기회가 있었으면 좋겠습니다. 들어주셔서 감사합니다. <br />
<br />
1. 면접관 님께서 느끼기에, 회사에 오래 근무할 수 있도록 동기를 유발하는 가장 좋았던 점이 무엇인가요? <br />
2. 신입이 입사 후 가장 많이 부딪히는 어려움은 무엇이고, 그것을 극복하기 위한 조언이 있을까요? <br />
3. 최종 합격 후 입사 전까지 준비하면 좋은 것은 무엇일까요?</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#8</code> 10년 뒤에 무엇을 하고 싶나요? (=5년 후 어떤 인재가 되어 있을 것 같은가?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
단순한 미래 계획을 묻는 것이 아니라, 지원자의 목표 의식, 성장 의지, 장기적인 커리어 비전을 확인하기 위한 질문입니다. 답변은 <b>기술적 성장을 기반으로 → 팀이나 서비스에 기여하고 → 나아가 리더십 또는 전문가로 정장하고 싶은 방향</b>으로 진행하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
10년 뒤에는 <b>기술에 대한 깊은 이해와 실무 경험을 바탕으로, 회사와 팀에 큰 영향을 줄 수 있는 개발자</b>가 되고 싶습니다. 제가 가진 프론트엔드 직무 역량을 더욱 발전시켜, <b>사용자 경험과 웹 성능 최적화에 강점을 가진 개발자로서, 프로젝트의 방향성과 기술적 선택을 주도하는 역할</b>을 맡고 싶습니다. 또한 지금은 프론트엔드 분야를 중심으로 학습하고 경험을 쌓아왔지만, 장기적으로는 제가 주로 역량을 쌓아왔던 프론트엔드 분야 뿐만 아니라 백엔드나, DevOps 등 다양한 영역도 이해하는 풀스택 개발자로 성장하고 싶습니다. 또한 혼자 성장하는 것을 넘어서, 신입 개발자에게 코드 리뷰나 문서화를 통한 지식 공유를 통해 팀 전체가 성장할 수 있도록 기여하는 개발자가 되는 것이 저의 목표입니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#9</code> 인생에서 가장 도전적인 경험은 무엇이었나요? (=프로젝트 진행 시 가장 어려웠던 점은 무엇이고 어떻게 해결했나요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 끈기, 문제 해결 능력, 책임감, 성장 의지를 평가하는 질문입니다. 답변은 <b>도전 상황 설명 → 왜 도전적이었는지 → 어떻게 극복했는지 → 무엇을 배웠는지</b> 순서로 진행하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
가장 도전적인 경험은 <b>학부 시절 IoT 관련 팀 프로젝트에서 실내 위치 추정 시스템을 개발했던 경험</b>이었습니다. <br />
<br />
저는 이 프로젝트에서 <b>팀장을 맡아 기획부터 구현까지 주도</b>하였습니다. 스마트폰의 센서를 이용해 실내 위치를 파악하는 것이 목표였는데, Wi-Fi의 RSSI 값을 수집한 후 이를 서버로 전송하여 <b>K-NN 알고리즘을 통해 사용자의 위치를 추정하는 방식</b>으로 프로젝트를 진행하였습니다. 해당 프로젝트를 진행하면서 가장 어려웠던 점은 바로 측정 정확도의 영향을 주는 AP(Access Point)의 위치였습니다. 학교 건물 내 공유기 위치가 고정되어 있어 실험 조건이 제약되었고, 이로 인해 정확한 결과를 얻기 어려웠습니다. 이 어려움을 극복하고자 저는 <b>발상의 전환으로, 스마트폰의 모바일 핫스팟 기능을 이용해 스마트폰 자체를 AP로 사용하는 방법을 제안</b>하였습니다. 이 덕분에 AP의 위치를 자유롭게 설정할 수 있게 되어 실험 조건을 원하는 대로 설정할 수 있었고, 위치 추정 정확도를 높일 수 있었습니다. <br />
<br />
이 경험을 통해 <b>문제 해결을 위한 창의적 사고와 팀을 이끄는 중요성</b>을 알 수 있었습니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#10</code> 직무가 맞지 않는다면 다른 분야도 할 수 있나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>유연성과 적응력</b>, 그리고 <b>해당 직무에 대한 진정성 있는 관심</b>을 평가하기 위한 질문입니다. 또 다른 이면에는, 직업 윤리의 공동체 윤리 중 하나인 조직과 다른 사람을 위해 자신의 손해를 감수하더라도 희생할 수 있는지에 대해 알고 싶어하는 질문입니다. 답변을 할 때 가장 중요한 포인트는 <b>현재 지원한 직무에 대한 강한 관심을 보여주되, 회사와 팀의 필요에 따라 유연하게 대응할 수 있다는 태도</b>를 보여주는 것입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 지금 지원한 직무와 관련하여 <b>프론트엔드 개발 직무에 가장 큰 관심을 가지고 역량을 쌓아왔습니다.</b> 사용자 경험과 웹 성능 최적화와 같은 부분에서 큰 관심을 가지고 지속적으로 공부해 왔기 때문에, 해당 분야에서 성장하는 것이 저의 제 1목표임이 분명합니다. <br />
하지만 회사나 팀의 방향이나 상황에 따라 다른 분야에서의 역할이 필요하다면 저는 기꺼이 배우고 도전할 생각이 있으며, 그런 경험 역시 저의 역량을 키울 수 있는 기회라고 생각합니다. 결국 중요한 것은 팀의 목표를 함께 이루고, 유연하게 기여하는 것이 개발자의 자세라고 생각합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#11</code> 본인에 대해 주변 사람들이 어떻게 생각하는가? (=주변에서 자신을 어떻게 생각하나요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>자기 인식과 대인 관계에서의 태도</b>를 평가하기 위한 질문입니다. 답변 시에는 실제로 들었던 피드백이나 주변 반응을 바탕으로, <b>장점을 강조</b>하되 <b>구체적인 사례</b>로 신뢰를 더하는 게 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
주변 사람들은 저를 <b>책임감 있고 열정이 있는 사람</b>이라고 평가해주었습니다. 특히 팀 프로젝트를 함께한 팀원들은, 제가 <b>주말을 포함해 매일 새벽까지 작업하는 모습</b>을 보며 “나도 더 열심히 해야겠다고 느꼈다”는 이야기를 해 준 적이 있습니다. 이런 피드백을 받을 때마다 제가 노력한 만큼 <b>팀 분위기에 긍정적인 영향을 줄 수 있다는 점에 보람</b>을 느꼈습니다. 이 경험을 계기로 앞으로도 팀 전체에 긍정적인 영향을 주고 싶다는 생각을 하게 되었습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#12</code> 100억짜리 사업이 있는데 모험적이라면 도전할 건가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>지원자의 리스크 감수 성향, 의사결정 기준, 도전 정신과 현실 감각의 균형</b>을 파악하려는 질문입니다. 답변 시 무조건 도전 또는 회피가 아니라, <b>신중한 분석 후 도전하겠다는 태도</b>를 보이면 좋습니다. 또한 <b>현실적인 리스크 판단 능력과 주도적 실행력</b>을 어필하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
100억짜리 사업은 분명 성공한다면 큰 수익을 얻을 수 있다는 점에서 매력적이지만, 리스크가 크다는 점에서 <b>무조건 도전하기보다는 충분한 분석과 준비를 거친 후에 도전</b>하겠습니다. 리스크가 크다는 것은 실패했을 때 오히려 큰 손실로 이어질 수 있기 때문입니다. 이렇게 리스크가 큰 사업을 마주치는 경우, 저는 먼저 <b>시장 조사, 타겟 분석, 리스크 요인 파악 등 사전 분석을 철저히 한 후, 실행 가능성이 보이는 경우에 도전</b>하겠습니다. 또한 회사 전체에 큰 영향을 줄 수 있는 일인 만큼 혼자 결정하지 않고 <b>회사 구성원의 의견을 수렴</b>한 후 도전 여부를 결정하겠습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#13</code> 축구 포지션 중에 좋아하는 포지션은 무엇인가요? 축구 포지션을 회사에서의 역할과 연관시켜서 설명해보세요.</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>자신의 성향과 팀 내 역할을 창의적으로 설명</b>하는지를 보기 위한 질문입니다. 정답은 없지만, <b>자신의 성격이나 일 스타일을 축구 포지션에 빗대어</b> 자연스럽게 설명하는 것이 중요합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 골키퍼 포지션을 가장 좋아합니다. <br />
<br />
골키퍼는 화려하진 않지만, 팀의 가장 마지막 방어선으로 반드시 필요한 존재이며, 팀의 수비진을 조율해야 하고, 한 번의 실수가 실점으로 이어질 수 있기 때문에 책임감이 막중한 포지션입니다. <br />
<br />
저는 팀으로 활동할 때 주어진 역할에 대해 끝까지 책임을 지려고 하는 성향이 강합니다. 팀의 안정감을 만들어주는 골키퍼처럼, 회사에서도 자신의 역할을 책임감 있게 수행하여 팀에 신뢰를 주는 사람이 되고 싶습니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#14</code> 휴학을 하지 않은 이유는 무엇인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>계획성, 꾸준함, 책임감</b> 등을 알아보기 위한 질문입니다. 답변의 핵심은 <b>휴학 없이도 목표를 충분히 달성할 수 있도록 노력했고, 그 과정에서 배운 점이 많다</b>는 방향으로 전개하는 것입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
<b>휴학을 하지 않고도 남은 시간을 효율적으로 사용해서 성장을 충분히 이루어 낼 수 있다고 판단</b>했습니다. 재학 중에도 방학이나 학기 중 시간을 활용해 개발 공부를 꾸준히 이어갔습니다. 물론 휴학을 하고 더 집중할 수도 있었지만, 오히려 학업과 병행하는 것이 좀 더 효율적인 학습이 이루어질 수 있다고 생각하였습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#15</code> 본인의 능력이 어느 정도라고 생각하나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>자신의 실력을 객관적으로 바라보는 시각</b>과 <b>겸손과 자신감의 균형</b>을 보는 질문입니다. 답변 시 <b>자신의 현재 위치를 겸손하면서도 구체적으로 표현하고 그 동안의 성과나 노력을 언급하고 앞으로의 성장 의지를 강조</b>하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 아직 “성장 중”이라고 생각합니다. <br />
<br />
분명히 어느 정도 기본기를 갖췄다고 느끼지만, 아직 배워야 할 것도 많고, 현업에서 요구하는 수준에는 아직 도달하지 못했다고 생각합니다. 다만 저는 부족한 점을 느낄 때마다 부족한 점을 보완하기 위해 꾸준히 공부해왔습니다. 예를 들어, 팀 프로젝트에서 프론트엔드를 맡으며 기능 구현 시 필요한 지식을 찾아보며 기능 구현을 완수했고, 또한 학습한 내용을 꾸준히 블로그에 정리하였습니다. <br />
<br />
앞으로도 저는 자신의 능력을 객관적으로 점검하면서 부족한 점을 찾아 보완하려고 끊임없이 공부하고자 합니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#16</code> 성격의 장단점은 무엇인가요? (=자신의 장점은 무엇인가요? 그리고 단점은 무엇이며 어떻게 극복하고 있나요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>자기 이해도, 자기 개발 의지, 팀워크에서의 태도</b> 등을 파악하기 위한 질문입니다. 핵심은 <b>장점은 직무와 연결되게, 단점은 보완 노력이 드러나게</b> 말하는 것입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저의 장점은 <b>계획을 철저히 세우는 점</b>입니다. 저는 평소에 어떤 일을 할 때 계획을 세워서 진행하는 것을 좋아합니다. 즉흥적으로 진행하기 보다는 계획을 철저히 세워 진행하는 것이 일을 효율적으로 진행할 수 있으며 성공 가능성을 높일 수 있다고 생각하기 때문입니다. 실제로 팀 프로젝트를 진행할 때 각자 역할을 명확히 나누고, 구현할 기능들을 미리 논의한 후 마감 기한을 정해 놓고 진행하였습니다. 이를 통해 일정을 효율적으로 관리하고 마감 기한을 지킬 수 있었습니다. <br />
<br />
반면, 제 단점은 <b>계획한 대로 일이 진행되지 않는 경우 스트레스를 받는 편</b>이라는 점입니다. 이 부분을 보완하기 위해 예상치 못한 변수가 생겼을 때 우선 순위를 조정하거나 팀원들과 의견을 적극적으로 교환해서 계획을 유연하게 조정하고자 노력하고 있습니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#17</code> 한화시스템 ICT의 인재상을 말해보세요.</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원한 회사에 대해 얼마나 공부했고, 자신이 그 회사에 적합한 인재인지에 대해 기본적인 고민을 했는지 확인하기 위한 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
한화시스템 ICT의 인재상은 <b>Great Challenger</b>로, 크게 다음 3가지 핵심 역량이 있습니다. <br />
<br />
1. 책임 있게 몰입하는 <b>주인의식</b> <br />
   업무를 자신의 일처럼 책임감 있게 수행하며, 장기적인 관점에서 사업 성과와 보상을 고려합니다. 주인의식을 바탕으로 신속하고 정확한 실행력을 발휘합니다. <br />
2. 기존의 틀을 넘어선 <b>월등한 차별성</b> <br />
   업계의 상식을 뒤엎는 대담한 목표를 설정하고, 핵심에 집중하여 디테일로 차별화를 이룹니다. 이를 통해 지속적으로 한발 앞선 결과를 창출합니다. <br />
3. 미래 기회를 선점하는 <b>변화 수용성</b> <br />
   시시각각 변화하는 시장 환경에서 과거의 성과에 안주하지 않고, 냉철하게 현실을 직시하며 미래를 선제적으로 대비합니다. 이를 통해 새로운 기회를 창출합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#18</code> 회사 내에서 불합리한 상황을 보면 어떻게 할 것인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자가 <b>조직 내 갈등 상황이나 문제를 마주했을 때의 태도</b>를 보고, 어떤 식으로 <b>소통하고 문제를 해결하는 사람인지</b>를 파악하려는 질문입니다. 답변 시 <b>조직을 존중하면서도 개선 의지를 보이는 방향</b>으로 진행하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
회사 내에서 불합리하다고 느껴지는 상황을 보면 <b>먼저 상황을 객관적으로 파악하려고 노력</b>하겠습니다. 감정적으로 대응하기보다는, <b>왜 그 상황이 벌어졌는지 파악</b>하고 해당 상황과 관련된 분들과 <b>정중하게 의견을 나누거나 건의하는 방법을 선택</b>하겠습니다. 저는 조직의 문화를 해치지 않으면서 <b>더 나은 방향으로 나아가기 위한 제안은 필요</b>하다고 생각합니다. 따라서 불합리한 문제를 지적하는 것을 넘어서, <b>대안을 함께 고민하고 소통하는 자세가 중요</b>하다고 생각합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#19</code> 회사에서 본인이 기여할 수 있는 점을 말해보세요. (=남들과 차별화된 역량을 보유하고 있나요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>본인의 강</b>을 소개하고, <b>그 강점을 통해 어떻게 기여할 수 있는지 구체적인 방식을 제시</b>한 다음, <b>회사와 직무에 맞춘 포부나 방향성을 강조</b>하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 <b>문서화에 강점이 있는 개발자</b>라고 생각합니다.
프로젝트를 진행할 때 Notion과 GitHub Wiki를 활용하여 회의 내용과 개발 기록을 문서로 남기고자 노력했습니다. 회의 내용을 문서로 기록함으로써 <b>팀원들과의 의사소통에 오해가 생기지 않고 소통이 원활하게 진행될 수 있도록 기여</b>하였습니다. 또한 개발 기록을 남김으로써 구현 과정에 있어서 <b>어떤 이유로 어떤 선택을 했는지</b>를 명확히 하여 팀원들의 이해도를 높일 수 있었습니다.
이러한 경험을 바탕으로, 입사 후에도 단순히 기능 구현에 그치지 않고 <b>개발 과정 전반을 명확히 기록하고 공유하여 협업이 원활히 이루어지도록 기여하고 지속 가능한 개발 환경이 구축</b>될 수 있도록 기여하겠습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#20</code> 입사 후 회사에서 무엇을 하고 싶나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>입사 후의 적극적인 자세, 회사와 직무에 대한 이해도, 장기적인 목표</b>를 강조하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
입사 후에는 <b>먼저 업무에 빠르게 적응하고 회사의 개발 문화와 프로세스를 이해하는 데 집중</b>하고 싶습니다. 그 과정에서 제가 가진 역량을 바탕으로 팀에 기여하는 구성원이 되도록 노력하겠습니다. 또한 개발 업무를 수행하면서 <b>문서화</b> 부분까지 신경 쓰는 개발자가 되고 싶습니다. 특히 개발 과정에서 마주쳤던 <b>트러블슈팅과 해결 경험</b>을 문서로 남김으로써 <b>지식 공유와 협업 문화에 기여</b>하고 싶습니다. </p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#21</code> 개발자로서 가져야 할 3가지 능력은 무엇이라고 생각하나요? (=직장 생활에서 필요하다고 생각하는 3가지와 그 이유는 무엇인가요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>개발 직무에 대한 본인의 이해도와 역량과 관련된 경험이 있는지 여부</b>를 확인하는 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer 1</u></strong><br>
개발자로서 가장 중요하다고 생각하는 능력은 <b>문제 해결 능력, 협업 능력, 지속적인 학습 능력</b>이라고 생각합니다. <br />
첫째, <b>문제 해결 능력</b>입니다. 개발 과정에서 예상치 못한 오류나 성능 문제를 마주칠 때, 이를 분석하고 해결하는 능력이 중요하다고 생각합니다. <br />
둘째, <b>협업 능력</b>입니다. 개발은 혼자 하는 일이 아닌 만큼, 팀원들과 원활하게 의사소통하고 협업하는 것이 중요하다고 생각합니다 <br />
마지막으로 <b>지속적인 학습 능력</b>입니다. 기술은 빠르게 변화하기 때문에, 새로운 언어나 프레임워크, 트렌드를 꾸준히 공부하는 것이 중요하다고 생각합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer 2</u></strong><br>
직장 생활에서 가장 중요하다고 생각하는 세 가지는 <b>소통, 책임감, 배움의 자세</b>입니다. <br />
첫째, <b>소통</b>은 협업의 기본이라고 생각합니다. 혼자서 일하는 경우는 없기 때문에, 경청하고 존중하며 자신의 의견을 명확히 전달하는 것이 중요하다고 생각합니다. <br />
둘째, <b>책임감</b>입니다. 주어진 업무를 책임감을 갖고 끝까지 해내는 태도가 팀 전체에 신뢰를 주고, 업무 흐름에도 큰 영향을 주기 때문입니다. <br />
마지막으로 <b>배움의 자세</b>입니다. 기술은 빠르게 변화하기 때문에, 새로운 언어나 프레임워크, 트렌드를 꾸준히 공부하는 것이 중요하다고 생각합니다. <br />
이 세 가지를 바탕으로 팀에 긍정적인 영향을 주는 구성원이 되고 싶습니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#22</code> 회사가 집에서 거리가 먼 것 같은데 출퇴근이 가능한가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>출퇴근 의지와 지속 가능성</b>을 확인하기 위한 질문입니다. 실제 거리보다는 <b>장거리 출퇴근에 대한 본인의 생각, 계획, 그리고 책임감</b>을 강조하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
네, 가능합니다. <br />
실제로 대학 재학 중에도 약 1시간이 넘는 거리를 대중교통으로 꾸준히 다닌 경험이 있어서, 출퇴근도 문제 없이 감당할 수 있다고 생각합니다. 또한 장거리 출퇴근으로 인한 피로를 최소화할 수 있도록 생활 패턴을 조정해 나갈 계획입니다. 출퇴근이 업무에 영향을 주지 않도록 최선을 다하겠습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#23</code> 어려움이 생겼을 때 극복하는 방법은?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>문제 해결 능력, 스트레스 대처 방식, 끈기와 태도</b>를 확인하려는 질문입니다. 따라서 단순히 “노력합니다”보다는 <b>구체적인 행동 방식</b>과 <b>경험 기반의 사례</b>를 포함해 답변하는 것이 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
어려움이 생겼을 때 저는 먼저 <b>상황을 객관적으로 분석</b>하고, <b>어떤 부분이 문제인지 구체적으로 파악</b>하고, <b>혼자 고민하기 보다는 팀원들과 상황을 공유하고 협력</b>하려고 노력합니다. <br />
<br />
예를 들어, 이전에 팀 프로젝트를 진행하던 중 점자 인식 AI 모델 구축에 어려움을 겪고 있어서 일정에 차질이 생긴 적이 있습니다. 당시 저는 제가 겪고 있는 어려움을 팀원들에게 공유하여 함께 문제 해결 방법을 고민하였습니다. 당시 한 팀원이 오픈소스를 활용하면 어떨까라는 의견을 제시하였고, 저는 그 의견을 받아들여 오픈소스를 활용하여 점자 번역 기능을 완성할 수 있었습니다. <br />
<br />
해당 경험을 통해 어려움이 생겼을 때는 혼자 고민하지 않고 팀원들에게 상황을 공유하고 협력하여 필요한 정보를 빠르게 습득하여 문제를 해결할 수 있다는 점을 배웠습니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#24</code> 갈등 극복 경험에 대해 말해보세요. (=팀원 간의 갈등을 어떻게 해결하나요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
갈등 관리 방법에 대해 확인하기 위한 질문입니다. 답변 시 팀원의 말을 <b>경청</b>하고 <b>설득</b>하여 <b>갈등을 극복한 후 해당 경험을 통해 깨달은 점</b>을 강조하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 팀원 간의 갈등이 생겼을 경우 먼저 <b>각자의 생각을 공유한 후 소통하여 타협</b>하려고 노력합니다. <br />
<br />
예를 들어, 이전에 캡스톤디자인(2) 졸업 프로젝트 주제를 선정할 때 저와 한 팀원 간의 의견이 충돌된 적이 있었습니다. 저는 [전화 시 언어 습관 분석 앱]을, 한 팀원은 기존에 존재한 [스마트국민제보] 앱 서비스의 불편한 점을 개선한 앱을 아이디어로 제시하였습니다. 의견이 충돌하면서 프로젝트 주제 선정에 어려움을 겪었습니다. 이와 같은 상황을 해결하고자 제시된 아이디어에 대한 서로의 생각을 공유하였습니다. 아이디어의 실용성, 실현 가능성, 해당 아이디어와 비슷한 주제 등과 관련하여 건설적인 논의가 이루어졌고, 해당 논의를 통해 [언어 습관 교정 키보드 앱]이라는 새로운 아이디어를 발굴해 내는 계기가 되었습니다. <br />
<br />
해당 경험으로 소통을 통해 갈등을 해결하고 협력하면서 더 좋은 아이디어를 낼 수 있음을 깨달았습니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#25</code> 단기적인 목표와 장기적인 목표는 무엇인가요? (=입사 후 꿈이 무엇인가요? 저희 회사에서 어디까지 올라가고 싶나요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>지원자의 커리어 계획이 구체적인지</b>, 그리고 <b>단기 목표와 장기 비전을 어떻게 연결</b>시키는지 파악하려는 질문입니다. 회사는 <b>단기적으로 빠르게 적응하고 성과</b>를 낼 수 있으면서도, 장기적으로는 <b>성장 가능성</b>이 있는 사람을 원한다는 점을 고려하여 답변하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 <b>단기적</b>으로는 회사 업무에 빠르게 적응하고 회사의 개발 문화와 프로세스를 이해하는 데 집중하겠습니다. 구체적으로는 코드 품질을 높이고, 유지보수가 쉬운 코드를 작성하는 습관을 기르며, 개발 과정에서 마주쳤던 트러블슈팅과 해결 경험을 문서로 남김으로써 지식 공유과 협업 문화에 기여하고 싶습니다. <br />
<br />
<b>장기적</b>으로는 제가 주로 역량을 쌓아왔던 프론트엔드 분야 뿐만 아니라 백엔드나, DevOps 등 다양한 영역도 이해하는 풀스택 개발자로 성장하고 싶습니다. 더 나아가 저의 성장 뿐만 아니라 팀원 모두가 지속적으로 성장할 수 있는 개발 문화를 만드는 것이 저의 목표입니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#26</code> 입사하게 된다면 회사에서 성장을 위해 어떤 방식으로 지원해주길 바라나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자가 <b>스스로 어떤 방식으로 성장</b>하려 하는지, 그리고 <b>회사의 지원에 대해 얼마나 구체적이고 현실적인 기대를 가지고 있는지</b>를 확인하는 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
입사 후에는 스스로 지속적으로 학습하고 성장하려는 자세를 유지할 것이지만, 회사에서도 성장을 위한 피드백 문화가 있었으면 좋겠습니다. <br />
예를 들어, 코드 리뷰나 사내 기술 세미나 등을 통해 선배 개발자들의 경험과 노하우를 배운다면 업무에 좀 더 빠르게 적응하고 성장할 수 있을 것 같습니다. <br />
정리하자면 회사의 지원에만 의지하지 않고 스스로 성장하되, 회사의 개발 문화 속에서 함께 성장할 수 있는 환경이 마련되었으면 좋겠습니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#27</code> 취미는 무엇인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 성격, 스트레스 해소 방법, 업무 외 삶의 균형 등을 파악하기 위한 질문입니다. 단순한 취미 나열보다, <b>그 취미가 본인의 성향이나 직무와 어떻게 연결되는지</b>까지 자연스럽게 녹여내면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
제 취미 및 특기는 <b>체스</b>입니다.
체스는 논리적으로 수를 읽고 전략을 세워야 하기 때문에 계획을 중시하는 저의 성향과 잘 맞았습니다. 체스를 두면서 신중하고 정확한 판단을 내리는 과정을 통해 논리적 사고와 집중력, 인내심을 키울 수 있었습니다. 이 덕분에 직무와 관련해서 문제 해결 시 보다 신중하게 접근하려는 습관이 생겼습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#28</code> 살면서 했던 것 중에 보람찼던 일은?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>가치관, 성취 경험</b>, 그리고 <b>타인을 위한 기여 경험</b>을 알려보려는 의도가 있는 질문입니다. 보람찼던 일은 단순히 “성과가 좋았다”보다, <b>왜 그것이 본인에게 의미 있었는지</b>를 중심으로 이야기하는 것이 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
<b>학부 시절 IoT 관련 팀프로젝트에서 실내 위치 추정 시스템을 개발했던 경험</b>이 가장 보람찼습니다. <br />
<br />
저는 이 프로젝트에서 <b>팀장을 맡아 기획부터 구현까지 주도</b>하였습니다. 스마트폰의 센서를 이용해 실내 위치를 파악하는 것이 목표였는데, Wi-Fi의 RSSI 값을 수집한 후 이를 서버로 전송하여 <b>K-NN 알고리즘을 통해 사용자의 위치를 추정하는 방식</b>으로 프로젝트를 진행하였습니다. 해당 프로젝트를 진행하면서 가장 어려웠던 점은 바로 측정 정확도의 영향을 주는 AP(Access Point)의 위치였습니다. 학교 건물 내 공유기 위치가 고정되어 있어 실험 조건이 제약되었고, 이로 인해 정확한 결과를 얻기 어려웠습니다. 해당 어려움을 극복하기 위해 저는 <b>발상의 전환으로, 스마트폰의 모바일 핫스팟 기능을 이용해 스마트폰 자체를 AP로 사용하는 방법을 제안</b>하였습니다. 이 덕분에 AP의 위치를 자유롭게 설정할 수 있게 되어 실험 조건을 원하는 대로 설정할 수 있었고, 위치 추정 정확도를 높일 수 있었습니다. <br />
<br />
이 경험은 팀의 리더로서 <b>문제 해결을 위한 창의적 사고와 팀을 이끄는 중요성</b>을 체감할 수 있었다는 점에서 가장 보람찼습니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#29</code> 본인을 한 문장으로 표현한다면? (=자신을 한 단어로 설명해보세요) (=당신을 어떤 사물에 빗대어 표현하고 싶나요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
자기 이해, 창의성, 성격의 특정을 간접적으로 드러내기 위한 질문입니다. 중요한 건 <b>자신의 장점이나 성향을 잘 드러낼 수 있는 사물</b>을 선택하고, <b>그 이유를 구체적으로 설명하는 것</b>입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저를 한 문장으로 표현하자면 <b>"체스의 폰"</b>이라고 말씀드리고 싶습니다. <br />
폰은 체스에서 가장 약한 기물이지만 하나하나가 소중한 존재입니다. 또한 폰은 단순히 앞으로 전진만 할 수 있지만, 끝까지 도달하면 퀸으로 승진할 수 있는 기물입니다. 저는 체스의 폰처럼 처음에는 작고 단순한 일부터 시작하지만, 맡은 일을 성실히 수행하고 지속적으로 성장하여, 미래에는 체스의 퀸처럼 회사에 꼭 필요한 인재로 성장하고 싶습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#30</code> 당신은 리더형인가요? 아니면 팔로워형인가요? 그 이유는 무엇인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 <b>자신의 역할 이해, 팀워크에 대한 태도, 상황에 따른 유연성</b>을 평가하기 위한 것입니다. 리더와 팔로워 중 하나만 고집하기 보다는 <b>상황에 따라 유연하게 대처할 수 있는 사람임을 어필</b>하는 것이 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 <b>팔로워형</b>에 가깝다고 생각합니다. <br />
팀 프로젝트를 할 때 팀의 방향성에 맞춰 주어진 역할에 책임감을 갖고 성실히 수행하였습니다. 특히 팔로워로서 팀장과 팀원들의 의견을 존중하고 필요할 때는 적극적으로 의견을 제시하여 원활하게 협업이 이루어지도록 기여하였습니다. <br />
하지만 저는 <b>상황에 따라 리더 역할을 맡아본 경험</b>도 있습니다. 예를 들어, 학부 시절 IoT 관련 프로젝트에서 팀장을 맡아 일정 관리, 기획 및 구현을 주도하였습니다. 이 때 리더로서 책임감과 팀을 이끄는 주도적인 자세가 중요하다고 느꼈습니다. <br />
요약하자면, 저는 <b>기본적으로 협업을 중시하는 팔로워형</b>이지만, 상황에 따라 주도적으로 <b>리더 역할도 수행할 수 있는 사람</b>이라고 생각합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#31</code> 입사 후 어떤 업무를 하고 싶나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>직무에 대한 이해도, 관심 분야</b>, 그리고 <b>자기 주도성</b>을 확인하려는 질문입니다. 답변 시 다음 3가지를 중심으로 구성하면 좋습니다. <br />
<br />
1. <b>직무 이해도 기반의 업무 희망</b> <br />
2. <b>이유 - 자신의 역량과 연관</b> <br />
3. <b>입사 후 어떻게 기여하고 싶은지</b></p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
입사 후에는 프론트엔드 개발 업무를 중심으로 맡고 싶습니다.
저는 사용자 경험을 고려한 UI 구현, 반응형 웹 개발, 웹 성능 최적화 등에 관심이 많으며, 프론트엔드 분야를 중심으로 역량을 쌓아왔습니다. 또한 개발 과정에서 문서화를 중시하여, 개발 과정에서 마주쳤던 <b>트러블슈팅과 해결 경험</b>을 문서로 남김으로써 <b>지식 공유와 협업 문화에 기여</b>하고 싶습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#32</code> 여기 말고 다른 회사를 지원했나요? 만약에 다른 회사에 취업하면 안 올 것 아닌가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 지원자의 <b>지원 동기 진정성, 회사에 대한 관심도</b>, 그리고 <b>충성도</b>를 파악하기 위한 질문입니다. <b>정직함과 동시에, 이 회사에 꼭 오고 싶다는 의지를 보여주는 균형 있는 답변</b>이 중요합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
솔직하게 말씀드리자면 다른 회사에 지원한 것은 사실입니다.
하지만 한화시스템 ICT는 저의 성향과 가장 잘 맞는 회사라고 생각해 가장 입사하고 싶은 회사입니다. 특히 한화시스템 ICT의 인재상 중 하나인 과거의 성과에 안주하지 않고 미래를 선제적으로 대비하고 발전하고자 하는 변화 수용성이, 지속적으로 성장하고자 하는 저의 가치관과 잘 맞는다고 생각합니다. 합격하게 된다면 지속적인 성장을 바탕으로 한화시스템이 미래에 이뤄낼 성과에 기여하고 싶습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#33</code> 존경하는 인물은 누구인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
단순히 <b>누구를 존경하느</b>보다, <b>그 인물의 어떤 점을 존경하며, 그 가치관이 본인에게 어떤 영향을 주었는지</b>를 보고자 하는 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
야구선수 박병호 <br />
<br />
프로야구 선수로서 입단 초기에는 1군에서 좋은 성적을 내지 못했지만, 미니 홈피에 걸어두었던 말인 “피나는 노력에 대타란 없다.” 처럼 야구에 대한 끊임없는 열정과 노력 끝에 성공한 모습을 보고 존경하게 되었습니다. 저는 박병호 선수처럼 힘든 상황이 생기더라도 끝까지 인내하고 노력하여 성장하는 사람이 되고 싶습니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#34</code> 본인을 표현할 수 있는 단어 3가지를 말씀해 주세요.</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 <b>지원자의 성격, 가치관, 강점을 간결하게 파악</b>하기 위한 질문입니다. 따라서 단어 하나하나에 근거(사례)를 덧붙여 설명하는 것이 중요합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저를 표현할 수 있는 세 가지 단어는<b>유연성, 주도성, 책임감</b>입니다.
첫째, <b>유연성</b>입니다. 저는 예상치 못한 상황이 발생하더라도 문제를 유연하게 해결하려고 노력하고 있습니다. 예를 들어, 개발한 애플리케이션에 오류가 발생하였을 때, 제가 맡지 않은 부분에서 오류가 발생하더라도 유연한 자세로 오류를 발견하고는 해결 방안을 제시한 경험이 있습니다.
둘째, <b>주도성</b>입니다. 저는 개발 시 개선 방안이 떠오르면 주도적으로 이를 실행한 경험이 있습니다.
마지막으로 <b>책임감</b>입니다. 저는 제게 주어진 역할을 책임감을 가지고 끝까지 해내고자 하는 자세를 갖고 있습니다. 특히 마감 기한을 지키기 위해 계획을 세워 일정을 효율적으로 관리하고 기능 구현을 완수하는 등 팀에 신뢰를 줄 수 있도록 노력하고 있습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#35</code> 한계까지 가본 경험과 극복 사례에 대해 말씀해 주세요.</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>압박 상황에서의 문제 해결 능력, 끈기, 책임감, 성장 경험</b>을 보기 위한 질문입니다. 답변은 다음 구조로 정리하면 좋습니다. <br />
<br />
1. <b>어떤 상황이었는가(배경)</b><br />
2. <b>어떤 어려움(한계)을 느꼈는가</b><br />
3. <b>어떻게 극복했는가(행동)</b><br />
4. <b>무엇을 배웠는가(결과/성장)</b></p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
제가 한계까지 몰렸던 경험은 <b>6주 간 진행된 팀 프로젝트에서 혼자 프론트엔드 개발을 수행했을 때</b>입니다. <br />
당시 저는 <b>Figma를 활용한 UI 디자인, 프론트엔드 구현, 트러블슈팅과 개발 기록 작성 등 문서 작업</b>을 완료해야 했기에 시간도 많이 부족했고, 체력적으로도 힘든 상황이었습니다. 이 상황을 극복하기 위해 먼저 <b>일의 우선순위를 정리</b>하였습니다. UI 디자인을 가장 먼저 마무리해 프론트엔드와 백엔드 간의 의사소통이 원활하게 이루어지도록 만들었습니다. UI 작업 이후에는 <b>핵심 기능부터 개발</b>하여 프로젝트의 완성도를 높이는 데 집중하였습니다. 마지막으로, 틈틈이 개발 과정에서 있었던 트러블슈팅과 개발 기록을 작성하는 식으로 일정을 정리하였습니다. <br />
결과적으로 프로젝트는 <b>기한 내에 완성</b>할 수 있었습니다. 이 경험을 통해 한계 상황에서도 침착하게 우선순위를 조정하고 체계적으로 계획을 실행하면 문제를 해결할 수 있다는 자신감을 얻게 되었습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#36</code> 팀원 중에 같이 일하기 힘들 것 같은 팀원은? (=본인과 맞지 않는 사람 유형은 무엇인가요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 단순히 “불편한 사람을 어떻게 대할 것인가?”를 묻는 것이 아니라, <b>협업의 대한 태도와 갈등 상황에서의 대처 능력, 조직 적응력</b> 등을 확인하려는 질문입니다. 따라서 누군가를 비난하거나 특정 유형을 단정 짓기보다는, <b>어떤 상황이 어려울 수 있고, 그 상황에서도 어떻게 협업하려고 노력하는지</b>를 중심으로 답변하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
제가 같이 일하기 어렵다는 느낀 팀원 유형은 <b>의사소통이 잘 이루어지지 않는 경우</b>입니다. <br />
예를 들어, 개발에 집중한 나머지 본인의 <b>개발 진행 상황을 공유하지 않거나 문서화에 소극적</b>인 경우, 협업이 원활하지 않을 수 있다고 느꼈습니다. 저는 이런 상황이 발생했을 때 <b>제가 먼저 개발 진행 상황을 공유하고, 작성한 문서를 공유</b>하는 등 주도적으로 팀 전체의 소통 흐름을 만들고자 노력했습니다. 이를 통해 팀원들도 이런 분위기에 따라 적극적으로 의사소통하는 모습을 볼 수 있었습니다. <br />
이 경험을 통해, <b>의사소통이 잘 이루어지지 않는 상황에서도 제가 먼저 스스로 나서서 의사소통하려고 시도하면서 팀의 분위기를 개선</b>할 수 있다고 느꼈습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#37</code> 인생에서 가장 중요하게 생각하는 것은 무엇인가요? (=본인의 가치관은 무엇인가요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>지원자의 가치관, 동기부여의 원천, 그리고 직무나 조직문화와의 적합성</b>을 파악하려는 질문입니다. 진정성 있게 답하되, <b>직무나 회사와 자연스럽게 연결될 수 있는 가치</b>를 중심으로 표현하는 것이 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
제 가치관은 타인으로부터 <b>“신뢰할 수 있는 사람”</b>이라는 평가를 받는 것입니다. <br />
저는 평소에 성실하게 행동하면서 주위로부터 신뢰를 많이 얻었고 신뢰를 받을 때마다 자신감이 쌓여 타인의 기대치만큼 성장하고 싶다는 생각이 들었습니다. 이와 같은 경험을 통해 타인으로부터 신뢰를 얻는 것이 중요하다는 것을 깨달았고 신뢰를 얻기 위해선 성실함과 정직함, 그리고 책임감 있는 자세가 중요하다고 생각했습니다. 이에 따라 제 가치관을 실현하기 위해 성실하게 생활하였고 자신이 맡은 일을 책임감을 가지고 최선을 다하려 노력하고 있습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#38</code> 트러블슈팅과 야근이 잦은 것에 대해 어떻게 생각하나요? (=야근이 많은데 할 수 있나요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>업무 강도나 불확실한 상황에 대한 태도, 스트레스 관리 능력, 업무에 대한 책임감</b> 등을 파악하기 위한 질문입니다. 면접관은 야근이나 트러블 상황을 무조건 좋아하라는 것이 아니라, 그런 상황에 대해 얼마나 성숙하고 현실적인 태도를 가지고 있는지를 알고 싶어합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
트러블슈팅과 야근이 많을 수 있다는 점은 개발자로서 어느 정도 감수해야 할 부분이라고 생각합니다. 특히 서비스가 운영 중이거나 중요한 배포 시점에는 예상치 못한 문제가 발생할 수 있고, 그럴 때는 책임감을 가지고 문제를 해결하는 것이 중요하다고 생각합니다. 다만 잦은 야근은 휴식 시간을 보장하지 않아 개인의 생산성을 크게 떨어뜨릴 수 있으므로, 평소에는 야근이 발생하지 않도록 근무 시간에는 일에 집중하여 가능한 경우 근무 시간 내에 업무를 마칠 수 있도록 노력하도록 하겠습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#39</code> 강한 어조의 반응이 오면 어떻게 대처할 것인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>감정 조절 능력, 대인 관계 능력, 문제 해결 방식</b>을 평가하기 위한 질문입니다. 면접관은 감정적으로 반응하지 않고 <b>침착하고 전문적으로 상황을 다룰 수 있는지</b>를 보고 싶어합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
강한 어조의 반응이 오더라도, 감정적으로 대응하지 않고 <b>상대방이 왜 그런 반응을 보였는지를 먼저 파악</b>하겠습니다. 강한 어조의 반응을 보인 경우 급박한 상황이나, 오해, 불만이 있는 경우가 많기 때문에 <b>상대방의 입장을 공감하고 문제의 원인을 파악하려는 자세가 중요</b>하다고 생각합니다. 문제의 원인을 파악한 후에는 대화를 통해 상황을 해결하고자 노력하겠습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#40</code> 상사가 거짓말을 한다고 느껴질 때 어떻게 대처할 것인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>도덕성</b>과 함께, <b>현실적인 조직 적응력, 대인 관계에서의 균형 감각</b>, 그리고 <b>문제를 감정적으로 처리하지 않고 현명하게 해결하는 태도</b>를 평가하려는 질문입니다. 면접관은 “싫어한다”는 감정을 어떻게 <b>조직 내에서 적절히 조율</b>할 수 있는지를 알고 싶어 합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 개인적으로 거짓말을 좋아하지 않고, 신뢰를 가장 중요한 가치로 생각합니다. 하지만 회사 내에서는 다양한 상황과 이해 관계가 존재하므로, <b>저의 판단이 무조건 맞다고 생각하기 보다는 먼저 대화를 통해 제가 이해한 것이 맞는지 확인</b>하려고 노력하겠습니다. 만약 상사의 말 중 명백히 틀린 부분이 있다면, <b>조심스럽게 사실을 확인하거나 질문하는 방식으로 접근</b>하겠습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#41</code> 업무 중 의견 차이가 생겼을 때 어떻게 대처하나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>협업 시 갈등 상황에서의 대처 능력과 감정 조절 능력, 소통 방식</b>을 평가하기 위한 질문입니다. 답변 시 <b>본인의 의견을 어떻게 설득력 있게 전달하는지</b>를 강조하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
업무 중 의견 차이가 생겼을 때는 감정적으로 대응하기보다는 <b>소통하고 타협</b>하려고 노력합니다. <br />
예를 들어, 캡스톤디자인(2) 졸업 프로젝트 주제를 선정할 때 저와 한 팀원 간의 의견이 충돌된 적이 있었습니다. 저는 [전화 시 언어 습관 분석 앱]을, 한 팀원은 기존에 존재한 [스마트국민제보] 앱 서비스의 불편한 점을 개선한 앱을 아이디어로 제시하였습니다. 의견이 충돌하면서 프로젝트 주제 선정에 어려움을 겪었습니다. 이와 같은 상황을 해결하고자 제시된 아이디어에 대한 서로의 생각을 공유하였습니다. 아이디어의 실용성, 실현 가능성, 해당 아이디어와 비슷한 주제 등과 관련하여 건설적인 논의가 이루어졌고, 해당 논의를 통해 [언어 습관 교정 키보드 앱]이라는 새로운 아이디어를 발굴해 내는 계기가 되었습니다. 해당 경험으로 <b>소통을 통해 갈등을 해결하고 협력하면서 더 좋은 아이디어를 낼 수 있음</b>을 깨달았습니다. </p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#42</code> 타 지역으로 배치 받으면 어떻게 할 것인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>유연성, 적응력</b>, 그리고 <b>회사에 대한 진정성</b>을 파악하기 위한 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
타 지역 배치에 대해서도 긍정적으로 생각하고 있습니다. <br />
저는 근무 지역은 중요하지 않다고 생각합니다. 중요한 것은 <b>새로운 환경에 적응하고 회사의 방향과 필요에 따라 경험을 쌓고 성장하는 것</b>이라고 생각합니다. 그런 점에서 더 많은 사람들와 협업하여 실무 역량을 쌓을 기회라고 생각합니다. 따라서 타 지역으로 배치 받더라도 빠르게 적응하고 회사에 기여할 수 있도록 노력하겠습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#43</code> 성공한 프로젝트 경험은?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원한 직무와 관련된 분야에서 핵심 역량을 가지고 공동 또는 개인적인 목표를 달성하거나 의미 있는 성과를 창출한 경험이 있는지 확인하기 위한 질문입니다. 답변 시  자연스럽게 도전 경험에 연결하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
<b>성공한 프로젝트 경험은 캡스톤디자인(2) 졸업 프로젝트였던 “언어 습관 교정 키보드 앱” 개발입니다.</b> <br />
이 프로젝트에서 저는 <b>기획부터 개발, 문서 작업까지 모든 과정에 참여</b>하였습니다. 특히 저는 사용자 경험을 고려한 UI 구현을 맡았습니다. 해당 프로젝트가 성공할 수 있었던 이유는 크게 두 가지입니다. <b>첫째, 효율적인 협업과 역할 분담입니다.</b> 매주 정기 회의를 통해 진행 상황을 공유하고, 각자의 장점을 살린 역할 분담을 통해 효율적으로 협업할 수 있었습니다. <b>둘째, 사용자 피드백 반영입니다.</b> 중간 발표와 멘토링을 통해 받은 피드백을 반영하여 사용자 경험을 개선하고 프로젝트의 완성도를 높일 수 있었습니다. <br />
결과적으로 프로젝트는 우수한 평가를 받았고, 이후 교수님으로부터 교내 공학학술제 참가를 제안해주실 만큼 성과를 인정받았습니다. 이 경험을 통해 체계적인 일정 관리, 역할 분담, 의사소통의 중요성을 느꼈습니다. 이 경험을 통해 배운 점은 회사 업무에서도 적용하고 싶습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#44</code> 다른 사람들과의 커뮤니케이션은 어떻게 진행하시나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>협업 방식, 소통 방식</b>, 그리고 <b>팀워크에 대한 태도</b>를 파악하기 위한 질문입니다. 면접관은 <b>지원자가 문제 발생 시 어떻게 소통하는지, 의사소통에서 중요하게 생각하는 가치는 무엇인지, 다양한 사람들과 일할 때의 유연성, 협업 과정에서의 본인의 커뮤니케이션 스타일</b>을 보고자 합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 의사소통 과정에서 <b>정확한 전달</b>과 <b>상대방에 대한 존중</b>을 가장 중요하게 생각합니다. <br />
협업할 때는 항상 팀원들의 의견을 경청한 후, 제 의견을 명확하게 전달하려고 노력하고 있습니다. 또한 개발 진행 상황을 정기적으로 공유하고, 문서화를 통해 팀 내 의사소통이 원활히 이루어지도록 기여하고 있습니다. 예를 들어, 프로젝트 진행 시 회의 내용을 문서로 기록하여 협업 시 오해가 생기지 않도록 방지하고, 개발 진행 상황을 공유하여 프로젝트 일정에 차질이 없도록 기여하였습니다. <br />
이런 경험을 통해, 원활한 의사소통이 협업의 핵심이라는 것을 느낄 수 있었습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#45</code> 업무 강도가 높을 수도 있는데 괜찮나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문의 의도는 <b>업무 스트레스와 높은 강도에 대한 인내력, 일에 대한 열정</b>, 그리고 <b>지속적인 동기 유지 능력</b>을 파악하기 위한 것입니다. 단순히 “괜찮습니다”라고 답하기보다는, <b>그에 대한 태도와 준비된 자세, 경험 기반의 근거</b>를 함께 제시하는 것이 중요합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
네, 괜찮습니다. 저는 짧은 시간 내에 많은 업무를 수행해야 했던 프로젝트 경험이 있습니다. <br />
예를 들어, 6주 간 진행된 팀 프로젝트에서 혼자 프론트엔드를 맡아 <b>Figma를 활용한 UI 디자인, 프론트엔드 구현, 트러블슈팅과 개발 기록 작성 등 문서 작업</b>을 완료해야 했기에 시간도 많이 부족했고, 체력적으로도 힘든 상황이었습니다. 이 상황을 극복하기 위해 먼저 <b>일의 우선순위를 정리</b>하였습니다. UI 디자인을 가장 먼저 마무리해 프론트엔드와 백엔드 간의 의사소통이 원활하게 이루어지도록 만들었습니다. UI 작업 이후에는 <b>핵심 기능부터 개발</b>하여 프로젝트의 완성도를 높이는 데 집중하였습니다. 마지막으로, 틈틈이 개발 과정에서 있었던 트러블슈팅과 개발 기록을 작성하는 식으로 일정을 정리하였습니다. <br />
결과적으로 프로젝트는 <b>기한 내에 완성</b>할 수 있었습니다. 이 경험을 통해 높은 업무 강도 속에서도 침착하게 우선순위를 조정하고 체계적으로 계획을 실행하면서 문제를 해결하겠습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#46</code> 스트레스를 푸는 방법은?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
단순히 취미를 묻는 것이 아니라, <b>지원자의 감정 조절 능력, 스트레스 관리 방식, 업무 지속 가능성</b>을 파악하기 위한 것입니다. 기업은 스트레스 상황에서 무너지지 않고, 스스로 회복하며 지속적으로 일할 수 있는 사람을 원합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 <b>체스</b>를 두며 스트레스를 해소하는 편입니다. 
체스는 논리적으로 수를 읽고 전략을 세워야 하기 때문에 집중력이 필요하고, 그 과정에서 자연스럽게 스트레스가 해소됩니다. 특히 스트레스로 인해 머릿속의 생각이 복잡할 때 체스를 두며 머릿속을 환기하면, 이후 업무를 진행할 때 차분하게 문제를 바라볼 수 있어서 스트레스 해소에 긍정적이었습니다. 이처럼 체스는 단순히 취미일 뿐만 아니라 스트레스를 관리하는 좋은 도구라고 생각합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#47</code> 기업의 비리를 발견하게 되었을 때 어떻게 대처할 것인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문의 핵심은 <b>지원자의 윤리 의식, 문제 해결 의식, 조직 내 갈등을 다루는 태도</b>를 확인하려는 것입니다. 즉, 무조건 고발하거나 무시하기보다는 <b>신중하고 책임감 있게 대응할 수 있는가</b>를 평가하려는 질문입니다. 면접관은 지원자가 <b>기업 윤리에 대한 가치관이 확립되어 있는지</b>, 내부 문제에 대해 감정적이 아닌 <b>이성적으로 절차적인 판단</b>을 할 수 있는지, 조직의 명예와 자신의 도덕성 사이에서 <b>균형 잡힌 태도</b>를 보이는지를 평가하고자 합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 기업의 비리를 발견했을 때, 무작정 문제를 드러내기보다는 <b>상황을 객관적으로 바라보고 사실 관계를 파악하여, 내부 절차에 따라 처리하는 것이 중요</b>하다고 생각합니다. 이러한 상황에서 <b>감정적 대응은 자제하고, 회사와 동료의 신뢰를 지키는 범위 내에서 윤리적인 결정을 내리는 것</b>이 중요하다고 생각합니다. 따라서 내부 신고 시스템이나 상급자 등 <b>공식적인 채널</b>을 통해 문제 상황을 알리고, 그 이후는 회사의 규정에 따라 처리되도록 하겠습니다. 회사의 지속적인 성장을 위해선 회사 구성원 개개인의 윤리 의식과 책임감 있는 판단이 반드시 필요하다고 생각합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#48</code> 체력 관리는 어떻게 하나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>업무 지속력과, 자기관리 능력, 스트레스 해소 방법</b>을 평가하려는 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 장시간 컴퓨터 앞에 앉아 있는 일이 많다 보니, 자리에서 자주 일어나 가벼운 스트레칭을 하며 컨디션을 관리하고 있습니다. 또한 체력을 일정하게 유지하기 위해 수면과 식사 시간을 포함한 생활 패턴을 최대한 일정하게 유지하고 있습니다. 이런 습관 덕분에 장시간 집중이 필요한 업무에서도 컨디션을 안정적으로 유지할 수 있습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#49</code> 워라밸에 대해서 어떻게 생각하나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>업무에 대한 태도</b>와 <b>조직 적응력</b>, 그리고 <b>장기 근무 가능성</b>을 평가하기 위한 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
워라밸은 <b>효율적인 업무 수행(개인의 생산성)</b>을 위해서 꼭 필요한 요소라고 생각합니다. 워라밸이 지켜지지 않는다면 휴식 시간이 보장되지 않아 개인의 생산성을 크게 떨어뜨릴 수 있기 때문입니다. 물론 상황에 따라 유연하게 조율될 필요도 있다고 생각합니다. 특히 프로젝트 마감일이 다가오거나 팀의 일정에 따라 추가적인 업무 수행이 필요한 경우 유연하게 근무 시간을 조정할 수도 있다고 생각합니다. 따라서 평소에는 주어진 시간 내에 최대한 효율적으로 일할 수 있도록 노력하면서도, 필요한 상황에서는 팀의 목표를 우선시할 수 있도록 유연하게 일하고 싶습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#50</code> 인상 깊게 읽은 책에 대해 설명해 주세요.</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
단순히 독서 경험을 묻는 것이 아니라 <b>지원자의 가치관, 사고 방식, 문제 해결 접근법</b> 등을 간접적으로 파악하려는 질문입니다. 답변 시 <b>독서를 자기 계발 수단으로 활용</b>한다는 점을 강조하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 <b>“머니볼”</b>이라는 책을 인상 깊게 읽었습니다. <br />
이 책은 메이저 리그 베이스볼에서 약팀이었던 오클랜드 애슬레틱스의 단장, 빌리 빈이 당시의 관행을 따르지 않고, 철저한 데이터 분석을 통해 저비용 고효율의 팀을 구성하여 팀을 강팀으로 이끈 이야기를 다룬 책입니다. 저는 이 책을 읽으면서 주목하지 않은 것들 중에서 가치 있는 것을 찾아내는 등 <b>기존의 틀을 넘어선 월등한 차별성</b>이 중요하다고 느꼈습니다. 이후 팀 프로젝트나 업무에서 기존의 방식에만 의존하지 않고, 더 나은 방식을 찾으려는 자세를 갖게 되었습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#51</code> 마감 기한 준수와 완성도를 높이는 것 중 어느 것이 더 중요하다고 생각하나요? (=납기 준수가 먼저인가요? 아니면 업무 퀄리티가 먼저인가요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 면접에서 자주 등장하는 <b>우선순위 판단 능력, 책임감, 유연한 사고</b>를 평가하기 위한 질문입니다. 단순한 양자택일이 아닌, <b>상황에 따라 균형 잡힌 판단을 할 수 있는지</b>를 보고자 하는 의도가 있습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 프로젝트에서는 <b>마감 기한 준수가 우선</b>이라고 생각합니다. 프로젝트는 혼자서 진행하는 것이 아니라 팀 전체 일정에 얽혀있는 경우가 많기 때문에, 기한을 지키지 못하면 팀 전체 일정에 영향을 줄 수 있기 때문입니다. 물론 무조건 완성도를 포기하는 것은 적절치 못하다고 생각합니다. 저는 마감 기한을 지키면서 완성도를 높이기 위해 <b>상사나 동료의 피드백을 받아 완성도를 지속적으로 높이는 방향</b>으로 진행하는 것이 좋다고 생각합니다. 핵심은 명확한 우선순위 설정과 팀 내 원활한 조율이라고 생각합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#52</code> 학창 시절 가장 잘했다고 생각하는 것은 무엇인가요? (=인생에서 가장 기억에 남는 일은 무엇인가요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 면접에서 지원자의 <b>가장 자신 있는 경험</b>을 통해 <b>성실성, 주도성, 협업 능력, 문제 해결 능력</b> 등의 역량을 확인하려는 의도가 있습니다. 단순한 성과 소개가 아닌, 그 경험을 통해 <b>무엇을 배우고, 어떻게 성장했는지</b>를 보고자 합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
학창 시절 가장 잘했다고 생각하는 일은 <b>실내 위치 추정 시스템을 개발하는 팀 프로젝트를 주도했던 경험</b>입니다.
저는 이 프로젝트에서 <b>팀장을 맡아 기획부터 구현까지 주도</b>하였습니다. 스마트폰의 센서를 이용해 실내 위치를 파악하는 것이 목표였는데, Wi-Fi의 RSSI 값을 수집한 후 이를 서버로 전송하여 <b>K-NN 알고리즘을 통해 사용자의 위치를 추정하는 방식</b>으로 프로젝트를 진행하였습니다. 해당 프로젝트를 진행하면서 가장 어려웠던 점은 바로 측정 정확도의 영향을 주는 AP(Access Point)의 위치였습니다. 학교 건물 내 공유기 위치가 고정되어 있어 실험 조건이 제약되었고, 이로 인해 정확한 결과를 얻기 어려웠습니다. 처음에는 다른 Sensing 기법을 사용하는 것도 고려해봤습니다. 이 때 저는 <b>발상의 전환으로, 스마트폰의 모바일 핫스팟 기능을 이용해 스마트폰 자체를 AP로 사용하는 방법을 제안</b>하였습니다. 이 덕분에 AP의 위치를 자유롭게 설정할 수 있게 되어 실험 조건을 원하는 대로 설정할 수 있었고, 위치 추정 정확도도 높일 수 있었습니다.
이 경험을 통해 <b>문제 해결을 위한 창의적 사고와 팀을 이끄는 중요성</b>을 알 수 있었습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#53</code> 임원이 되기까지 몇 년이 걸릴 것이라고 생각하나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 단순히 연차나 승진 속도를 묻는 것이 아니라, <b>지원자의 커리어 비전, 성장 의지, 현실 인식</b> 등을 종합적으로 평가하려는 의도가 담겨 있습니다. 답변 시 단순히 “되고 싶다”가 아니라 <b>“어떻게 성장해갈 것인지”</b>에 대한 계획을 보여주는 것이 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 15년 이상의 시간이 필요하다고 생각합니다. <br />
임원이 되는 것은 단기간에 이룰 수 있는 일이 아니며, <b>회사에서 장기적으로 기여하고 리더십을 검증 받는 과정이 필요</b>하다고 생각합니다. 개인적으로는 15~20년 정도의 시간이 필요하다고 생각하며, 그만큼 꾸준한 성장과 다양한 실무 경험이 필요할 것입니다. 따라서 저는 입사 후에는 업무에 빠르게 적응하고 회사의 프로세스를 이해하여 성과를 내는 것을 최우선 목표로 삼고자 합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#54</code> 전공 과목 중 어려웠던 과목은 무엇인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
단순히 어려웠던 과목을 묻는 것이 아니라, <b>어려운 상황을 어떻게 대처하고 극복했는지</b>, 즉 <b>문제 해결력과 학습 태도</b>를 파악하기 위한 질문입니다. 답변 시 스스로 학습 전략을 세워 어려움을 어떻게 해결했는지를 보여주는 것이 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
전공 과목 중에서 <b>“컴퓨터통신”</b> 과목이 가장 어려웠습니다. <br />
OSI 7계층이나 네트워크, 서브넷 마스크 개념 등 생소한 개념들이 많아 처음에는 개념을 이해하는 데 어려움을 겪었습니다. 이를 해결하기 위해 강의 자료를 반복해서 읽고, 강의 외에도 온라인 자료를 찾아 개념을 이해하려고 노력했습니다. 아직 네트워크 분야는 더 학습해야 할 부분이 많지만, 이 경험 덕분에 새로운 기술을 접할 때도 두려움 없이 접근할 수 있게 되었습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#55</code> 자신의 일은 아니지만 팀원의 일을 자신이 하면 매우 빠르게 처리할 수 있는 경우, 도와주면 자신의 일이 약간 밀리는 데 어떻게 할 것인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 단순히 “도와줄 거냐 말 거냐”를 묻는 것이 아니라, <b>협업에 대한 태도, 우선순위 판단 능력, 조직 기여도에 대한 사고방식</b>을 알아보려는 의도가 있습니다. 면접관은 지원자가 팀워크와 공동 목표에 대한 의식이 있는지, 자신의 업무와 팀 전체의 효율을 어떻게 균형 있게 판단하는지, 개인의 책임과 팀 기여 사이에서 어떻게 균형 잡힌 결정을 내리는지를 평가하고자 합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
<b>프로젝트는 혼자서 진행하는 것이 아니라 팀 전체 일정에 얽혀 있는 경우가 많기 때문에, 제 업무에 치명적인 지장이 없다면 기꺼이 돕겠습니다.</b> 팀원이 맡은 부분의 작업이 밀리면 팀 전체 일정에 영향을 줄 수 있기 때문입니다. 또한 실제로 업무를 하다 보면 각자의 속도와 강점이 다르기 때문에, 서로를 보완해주는 것이 팀 전체의 효율을 높이며 함께 성장할 수 있는 문화를 만들 수 있다고 생각합니다. 다만, 제 업무 일정에도 크게 영향을 줄 수 있는 만큼 우선순위를 판단해 제가 도울 수 있는 범위 내에서 돕는 것이 적절하다고 생각합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#56</code> 시스템에 오류가 발생했을 때 가장 먼저 해야 할 일은 무엇이라고 생각하나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
기술적인 대응 능력 뿐만 아니라 <b>문제 의식, 우선순위 파단, 커뮤니케이션, 책임감</b> 등을 파악하려는 질문입니다. 답변 구조를 <b>문제 해결에 대한 우선순위 능력 판단 → 침착함과 책임감 있는 태도 → 커뮤니케이션 능력 → 기술 역량과 대응 경험 간접 평가</b> 순서로 진행하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
오류가 발생했을 때 가장 먼저 할 일은 <b>오류의 발생 지점과 서비스에 미치는 영향을 신속히 파악하는 것</b>이라고 생각합니다. 구체적으로는 로그나 모니터링 도구를 통해 어느 부분에서 오류가 발생했는지 확인하고, 서비스에 어떤 영향이 있는지를 판단하겠습니다. 이와 동시에 팀원들에게 오류 발생 상황을 공유하여 오류를 해결하는 동안 사용자에게 주는 피해를 줄이고자 노력하겠습니다. 정리하자면, <b>오류 대응은 기술적 조치 뿐만 아니라, 상황 공유 및 후속 조치까지 포함된다고 생각합니다.</b></p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#57</code> 갑자기 발생한 문제 상황을 해결한 경험이 있나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>문제 해결 능력, 우선순위 판단, 커뮤니케이션 능력, 업무 태도와 책임감</b>을 확인하기 위한 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
<b>팀 프로젝트 중 제가 구현한 댓글 기능에서 Enter 키를 누를 때 메시지가 2번 전송되는 오류가 발생한 적이 있습니다.</b> <br />
이 문제는 Windows 환경에서는 발생하지 않았지만, MacOS 환경에서는 발생하는 문제였기 때문에 초기에 인지하지 못했고, 팀원의 피드백을 통해 문제를 확인하게 되었습니다. 문제의 원인을 파악하기 위해 먼저 브라우저 콘솔 로그를 확인하면서 Enter 키 이벤트가 중복 호출되고 있다는 점을 발견했습니다. 이는 <b>한글이 자음과 모음으로 이루어져 있기 때문에 글자를 입력할 때 글자가 조합 중인지, 아니면 조합이 끝난 상태인지 알 수 없기 때문에 발생한 문제</b>였습니다. 문제 해결을 위해 isComposing 프로퍼티를 사용하여 현재 입력 문자가 조합 중인지, 아니면 조합이 끝난 상태인지 확인하여 Enter키 이벤트가 중복으로 호출되는 문제를 방지하였습니다. <br />
이 경험을 통해 동일한 코드라도 OS나 브라우저 환경에 따라 다르게 동작할 수 있다는 점, 그리고 <b>타인의 피드백이 프로젝트의 완성도를 높이는 데 중요하다는 것</b>을 배웠습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#58</code> 상사와의 마찰이 생겼을 때 해결 방법은 무엇인가요? (=만약 상사가 보수적이거나, 상사가 적극적으로 마찰을 해결할 의지가 없을 때는 어떻게 하시겠습니까?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>조직 적응 능력과 문제 해결 능력, 의사소통 능력</b> 등을 확인하는 질문입니다. 답변 시 서로 간의 대화를 통한 조율, 서로 간의 경험 및 능력을 고려하는 것이 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
상사와의 갈등이 생긴다면 일단 <b>대화를 통해 서로의 생각과 의견을 들어보고 어디에서 갈등 원인이 생겼는지 파악한 후 문제를 해결</b>하도록 노력하겠습니다. 또한 상사는 신입인 저보다 인생 및 실무 경험이 많은 분입니다. 실무적인 측면에서 저보다 능숙하므로 그 분의 의견을 최우선적으로 따르되, 불합리한 것에는 의견을 제시하여 갈등을 조율하도록 하겠습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#59</code> 직장에서 상사나 동료가 이유 없이 자신을 싫어해서 갈등이 일어난다면 어떻게 대처하시겠습니까?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>대인관계 능력, 감정 조절력, 직장 내 갈등 해결 방식</b>을 파악하기 위한 질문입니다. 특히 감정적으로 대처하기보다는 <b>성숙하고 논리적인 방식으로 문제를 해결하려는 자세</b>가 있는지를 평가하려는 의도가 있습니다. 답변 시 <b>감정적으로 대응하지 않겠다는 태도, 갈등의 원인을 파악하려는 노력, 원활한 협업을 위한 관계 회복 의지</b>를 보이면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
만약 상사나 동료가 저를 싫어하는 것처럼 느껴진다면, 감정적으로 대응하지 않고 <b>먼저 저의 행동과 자세에 문제가 없었는지 스스로 돌아보겠습니다.</b> 혹시라도 제게 문제가 있었다면 그 단점을 개선하려고 노력하겠습니다. 이후에도 갈등이 지속된다면, 대화를 통해 상사와 동료로부터 제가 개선했으면 하는 점을 피드백으로 받아 적극적으로 수용하려고 노력하겠습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#60</code> 입사 후 일이 단순하고 너무 재미가 없으면 어떻게 할 것인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자가 <b>단순하거나 반복적인 일이라도 책임감을 갖고 해낼 수 있는지, 스스로 동기를 부여하거나 흥미를 찾으려는 노력을 하는지, 단기적인 재미보다는 성장이나 경력을 어떻게 바라보는지</b> 확인하기 위한 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 단순하고 반복적인 업무를 하더라도 <b>실무 경험을 쌓고 성장하는 것이 더 중요</b>하다고 생각합니다. 단순한 업무 역시 팀에 반드시 필요한 일이라고 생각하고 책임감을 가지고 성실하게 수행하겠습니다. 또한 업무를 수행하면서 더 나은 방법이 없는지 고민하고, 좋은 방법이 있다면 적극적으로 제안하고 개선해보고 싶습니다. 무엇보다도 제가 하는 일이 팀에 기여하고 타인으로부터 인정 받기 위한 과정이라 생각하여 최선을 다하겠습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#61</code> 본인은 논리적인가요? 아니면 창의적인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문의 의도는 지원자의 문제 해결 스타일과 업무 방식의 강점을 파악하는 데 있습니다. <b>“논리적”</b>이면 <b>분석력, 계획성, 체계적인 접근</b>에 강점이 있음을, <b>“창의적”</b>이면 <b>유연한 사고, 새로운 아이디어, 독창적인 해결책</b>에 강점이 있음을 강조하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 <b>논리적</b>이라고 생각합니다. <br />
저는 문제를 해결할 때 감보다는 근거를 중시하고, 계획을 세워 체계적으로 원인을 파악하고 문제를 해결하는 것을 선호합니다. 예를 들어, 기능 구현 시 우선순위를 먼저 파악하여 핵심 기능부터 구현하거나, 사용자 시나리오를 근거로 사용자 경험을 개선하는 등 논리적인 방식으로 문제를 해결하고자 노력하고 있습니다. <br />
저는 실무에서도 근거를 중심으로 체계적으로 문제를 해결하고자 노력하겠습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#62</code> 회사를 오랫동안 다니게 하는 원동력은 무엇이라고 생각하나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>장기 근속 가능성</b>과 <b>회사와의 문화적 궁합</b>을 확인하는 질문입니다. 단순히 “회사를 오래 다니겠습니다”보다, <b>그 이유와 기반</b>이 무엇인지 설명하는 것이 중요합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 회사를 오래 다니는 원동력은 <b>성과에 따른 합리적인 보상</b>이라고 생각합니다. 목표를 달성하고 그에 대한 평가를 받는 과정이 일에 대한 동기를 부여하고, 장기적인 커리어 목표를 설정하는 데도 중요한 역할을 한다고 생각합니다. 개인과 회사가 지속적으로 함께 성장하고자 하는 목표가 있다면, 저는 오랜 시간 함께할 수 있다고 생각합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#63</code> 협업할 때 어려웠던 점은 무엇인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>지원자의 협업 능력, 갈등 대처 방식, 의사소통 스타일</b>을 파악하려는 질문입니다. 기업은 혼자 일하는 사람보다 <b>팀워크를 잘 이뤄내는 사람</b>을 선호하기 때문에, 답변 시 <b>과거에 어떤 어려움을 겪었는지 → 그것을 어떻게 해결했는지 → 이후 어떤 교훈을 얻었는지</b> 순서로 진행하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
협업할 때 어려웠던 점은 <b>서로의 의견이 충돌했을 때 이를 조율하는 일</b>이었습니다. <br />
예를 들어, 캡스톤디자인(2) 졸업 프로젝트 주제를 선정할 때 저와 한 팀원 간의 의견이 충돌된 적이 있었습니다. 저는 [전화 시 언어 습관 분석 앱]을, 한 팀원은 기존에 존재한 [스마트국민제보] 앱 서비스의 불편한 점을 개선한 앱을 아이디어로 제시하였습니다. 의견이 충돌하면서 프로젝트 주제 선정에 어려움을 겪었습니다. 이와 같은 상황을 해결하고자 제시된 아이디어에 대한 서로의 생각을 공유하였습니다. 아이디어의 실용성, 실현 가능성, 해당 아이디어와 비슷한 주제 등과 관련하여 건설적인 논의가 이루어졌고, 해당 논의를 통해 [언어 습관 교정 키보드 앱]이라는 새로운 아이디어를 발굴해 내는 계기가 되었습니다. 해당 경험으로 <b>소통을 통해 갈등을 해결하고 협력하면서 더 좋은 아이디어를 낼 수 있음</b>을 깨달았습니다. </p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#64</code> 저희 회사는 어떻게 알게 됐나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 지원자의 <b>관심도, 진성성, 준비성</b>을 파악하기 위한 것입니다. 단순히 기업 이름만 보고 지원한 것인지, 아니면 진심으로 회사에 관심을 갖고 <b>조사해 본 적이 있는지</b>를 확인하고자 합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
채용 플랫폼에서 <b>회사 채용 공고</b>를 보고 알게 되었습니다. <br />
이후 홈페이지와 블로그 등을 통해 회사를 더 자세히 조사해보면서, 과거의 성과에 안주하지 않고 미래를 선제적으로 대비하고 발전하고자 하는 회사의 가치관에 큰 매력을 느꼈습니다. 저 역시 지속적으로 발전하는 개발자의 삶을 지향하여 꾸준히 개발 공부를 진행해왔고, 학습한 내용을 꾸준히 블로그에 정리해 왔기에, 이러한 회사의 방향성과 잘 맞는다고 생각했습니다. 이에 개인의 성장과 더불어 한화시스템이 미래에 이뤄낼 성과에 기여하고 싶어서 지원하게 되었습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#65</code> 학교에서 좋은 추억과 나쁜 추억에 대해 말해 주세요.</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>대인 관계와 감정 표현 방식, 문제 해결 능력, 성장 경험</b>을 확인하기 위한 질문입니다. 답변 시 <b>추억을 어떻게 받아들였는지, 나쁜 경험을 어떻게 극복했는지, 학창시절 경험이 현재 가치관이나 태도에 어떤 영향을 끼쳤는지</b>를 중심으로 답변하면 좋습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
<b>좋은 추억</b>은 졸업 프로젝트를 팀원들과 함께 성공적으로 마쳤을 때입니다. 처음에는 의견 차이도 있었지만, 각자의 역할을 분담하고 적극적으로 소통하면서 결과물을 완성해냈고, 최종 발표에서도 우수한 평가를 받았습니다. 이후 교수 님께서 교내 공학학술제 참가를 제안해주실 만큼 성과를 인정받았습니다. <br />
<br />
<b>나쁜 추억</b>은 2학년 때 객체지향프로그래밍 과목에서 팀 프로젝트 결과물의 평가가 좋지 않았던 점입니다. 각자 자신이 맡은 기능 구현에만 집중했고, 코드 스타일이나 설계에 대한 논의가 부족했습니다. 이로 인해 전체적인 코드 품질이 떨어졌고, 객체지향적인 관점에서 낮은 평가를 받았습니다. 이 경험을 이후 개발할 때 코드 품질에 대해 신경 쓰게 되는 계기가 되었습니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#66</code> 어떤 개발이 가능하신가요? (=어떤 역량을 가지고 있나요?) (=프로그래밍은 어디까지 배워봤나요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>지원자의 기술 스택과 실무 역량, 경험의 깊이와 실전 적용 능력, 직무와의 적합성</b>을 평가하기 위한 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 <b>프론트엔드 개발</b>을 중심으로 역량을 쌓아왔습니다. <br />
React와 Next.js를 사용한 웹 개발 경험이 있으며, TypeScript를 기본으로 사용합니다. <br />
저는 사용자 경험과 웹 성능 최적화에 관심이 많아 Lighthouse 기반의 성능 개선 경험이 있습니다. 예를 들어, 웹 사이트에서 사용할 이미지의 포맷을 WebP와 AVIF로 변경하여 이미지 용량을 크게 줄여 웹 페이지 로딩 속도를 크게 개선하였습니다. <br />
또한 React Query, Zustand 등을 활용하여 상태 관리 경험이 있고, Git과 GitHub를 통한 협업 경험, Figma를 활용한 디자이너와의 협업 경험도 있습니다. <br />
요약하면 저는 웹 프론트엔드 중심의 개발을 주로 할 수 있으며, 사용자 경험을 개선하고 웹 성능을 고려한 개발을 할 수 있습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#67</code> SW업체와 ICT업체의 차이가 무엇인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 단순한 지식 확인보다도, <b>지원자가 산업 구조를 얼마나 이해하고 있는지</b>, 그리고 <b>지원한 회사가 속한 업종의 특성을 얼마나 알고 있는지</b>를 평가하기 위한 질문입니다. 특히 <b>ICT 융합 기술에 주력하는 기업</b>에 지원할 경우, 기업은 단순 소프트웨어 개발 능력뿐 아니라 <b>융합적 사고</b>와 <b>산업 이해도</b>를 기대합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
<b>SW업체</b>는 <b>소프트웨어 자체를 기획, 개발, 공급</b>하는 것을 중심하는 하는 기업입니다. 대표적으로 웹/앱 개발, ERP, 솔루션, 클라우드 소프트웨어 등이 있으며 기술력 중심으로 특정 서비스나 제품을 개발하고 유지보수하는 데 집중합니다. <br />
<br />
반면, <b>ICT업체</b>는 정보통신기술을 기반으로 <b>하드웨어, 소프트웨어, 네트워크를 통합</b>하여 보다 복합적인 서비스를 제공하는 기업입니다. 대표적으로 국방, 에너지, AI 기반의 융합 시스템 등 다양한 산업 영역과 접목된 기술이 중심입니다. 이 때문에 단순한 개발 능력뿐 아니라 <b>도메인 지식, 융합적 사고, 시스템 통합</b>에 대한 이해가 중요하다고 생각합니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#68</code> SI 직무가 하는 일은 무엇인지 아시나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 지원자가 <b>SI 직무의 역할과 특징을 정확히 이해하고 준비했는지</b>를 파악하기 위한 질문입니다. 특히 SI는 개발 외에도 <b>요구 분석, 시스템 설계, 커뮤니케이션 능력, 유지보수, 고객 대응</b> 등이 포함되기 때문에, 해당 직무에 대한 <b>이해도와 적합성, 실무 역량, 의지</b>를 확인하려는 의도가 있습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
네, SI 직무는 단순히 개발만 수행하는 것이 아니라, <b>고객의 요구사항을 분석하고, 이를 바탕으로 시스템을 설계하고 개발, 통합하는 일</b>을 수행합니다. <br />
특히 프로젝트 수행 과정에서 <b>요구사항 파악, 일정 관리, 협업, 테스트 및 유지보수</b>까지 폭넓은 업무를 수행하는 것으로 알고 있습니다. 따라서 단순한 코딩 능력뿐 아니라, <b>문제 해결 능력, 커뮤니케이션 능력, 책임감, 고객 지향적인 태도</b>가 중요한 직무라고 생각합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#69</code> 진행한 프로젝트에서 기술적으로 어필할 부분이 있다면 무엇인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자가 프로젝트를 단순히 수행한 것이 아니라, <b>기술적인 깊이와 문제 해결 능력, 실무 연관성을 갖춘 경험</b>을 가지고 있는지를 확인하기 위한 질문입니다. 특히 면접관은 다음을 평가하고자 합니다. <br />
<br />
- 프로젝트에서 <b>주도적으로 해결한 기술적 문제</b>가 있었는가 <br />
- 단순한 구현이 아니라 <b>성능, 구조, 유지보수, 사용자 경험</b> 등을 고려했는가 <br />
- <b>기술 선택의 이유</b>와 그로 인한 <b>성과</b>는 무엇인가 <br />
- <b>구체적인 결과</b>나 개선 지표가 있는가</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
<b>혼자 여행하는 사람들을 위한 여행 종합 플랫폼 프로젝트</b>에서 프로젝트 규모가 커지면서 폴더 구조가 복잡해지고 특정 기능과 관련된 코드들이 너무 광범위하게 흩어져 있어서 유지보수가 어려운 문제점이 있었습니다. 특히 공통 컴포넌트 관리가 어려워서 팀원이 구현한 기능을 재활용하지 못한 문제가 있었습니다. <br />
이를 해결하기 위해 <b>FSD(Feature-Sliced Design) 아키텍처</b>를 도입했습니다. 기존의 역할 기반 폴더 구조에서 기능 중심의 폴더 구조로 변경하여 <b>기능 단위로 관심사 분리가 가능</b>해졌습니다. FSD 아키텍처를 적용함으로써 코드 재사용성이 높아졌고 협업이 수월해졌습니다. <br />
이처럼 단순히 기능을 구현하는 것을 넘어서 <b>협업 효율성을 고려한 설계 역량</b>이 저의 강점 중 하나라고 생각합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#70</code> 만약 현업에서 무리한 요구를 할 경우에는 어떻게 대처할 것인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>현실적인 문제 해결 능력, 소통 방식과 태도, 우선순위 판단과 협업 능력</b>에 대해 평가하기 위한 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
무리한 요구가 들어왔을 때는 먼저 <b>해당 요구의 배경과 목적을 파악</b>하려고 노력하겠습니다. 정말 급박한 상황이거나 불가피한 사유가 있는 경우에는 팀원들과 협의하여 <b>일정을 재조정하거나 우선순위를 조정</b>해 가능한 선에서 대처하려고 노력하겠습니다. 만약 현실적으로 일정이나 기타 이유로 수용하기 어려운 경우라면, 수용하기 어려운 이유를 명확히 설명드리고 대안을 함께 제시하는 방향으로 소통하겠습니다. 예를 들어, 요구받은 기능 중 핵심 요구사항을 먼저 처리하고, 남은 요구사항들은 추후에 처리하는 방안을 제시하도록 하겠습니다. <br />
이처럼 일방적인 거절이 아니라, 함께 해결책을 고민하는 자세가 중요하다고 생각합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#71</code> 상사가 부당한 지시를 내릴 경우 어떻게 대처하실 건가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>조직 적응 능력과 문제 해결 능력, 의사 소통 능력</b> 등을 묻는 질문입니다. 답변 시 다음을 고려하면 좋습니다. <br />
<br />
1. 서로 간의 경험 및 능력을 고려하고, 무조건적으로 지시를 따르는 것은 지양해야 하는 행위입니다. <br />
2. 부당한 지시의 상황에 대해 보다 구체적으로 제시되기도 하는 질문입니다. 조직생활에서 나의 업무에 지시권을 가지고 있고, 때로는 인사에 영향력을 미칠 수 있는 상사의 지시에 문제를 느낄 경우 지원자 대응은 어려울 수 밖에 없습니다. 하지만 개인에 따라 부당함의 기준이 주관적일 수 있고, 실제 직장생활에서 겪게 될 수 있는 상황인 만큼 현실적인 답변을 하도록 합니다. <br />
</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
상사가 부당한 지시를 내리는 경우 조금 당황스러울 것 같습니다. 일단 제 상사이므로 업무 시간에 자주 볼 사이이기 때문에 서로 간의 심한 갈등이 생기지 않는 선에서 융통성을 발휘하여 따를 필요가 있다고 생각합니다. 만약 상사께서 내린 지시가 사소한 일이거나 큰 문제를 일으키지 않는 정도의 일이라면 융통성을 발휘하여 지시에 따르도록 하겠습니다. 하지만 해당 지시가 외부에 알려지면 회사의 이미지를 떨어뜨릴 정도로 큰 문제를 일으키는 일이거나 법적으로 문제가 있을 소지가 있을 일이라면 그대로 따르지 않고 상사를 설득할 필요도 있다고 생각합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#72</code> 회사를 고르는 기준은 무엇인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
<b>지원자의 가치관</b>과 <b>직업 선택 기준</b>을 파악하고, 그것이 <b>자사와 얼마나 부합하는지</b> 평가하는 질문입니다. 또한 <b>입사 후 장기적인 근무 가능성</b>이나 <b>회사에 대한 관심도</b>를 엿보려는 의도도 포함됩니다. 답변 시 회사에 대해 <b>조사한 내용</b>을 바탕으로 <b>본인의 가치관 또는 커리어 방향</b>과 연결 지으면 좋습니다. 단, <b>막연하게 연봉 또는 복지만 언급하는 것은 피해야 합니다.</b></p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 회사를 고를 때 <b>저의 성향과 회사의 가치관이 잘 맞는지</b>를 고려합니다. <br />
저는 <b>지속적인 성장 가능성</b>을 중요하게 생각합니다. 개인의 성장 뿐만 아니라 회사 구성원 모두가 함께 배우고 성장할 수 있는 조직 문화를 중요하게 생각합니다. 그런 점에서 귀사의 과거의 성과에 안주하지 않고 미래를 선제적으로 대비하고 발전하고자 하는 회사의 가치관에 매력을 느꼈습니다. 이러한 가치관이 제 성향과 잘 맞기 때문에, 귀사를 선택하게 된 중요한 이유가 되었습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#73</code> 왜 프론트엔드를 희망했나요? (=프론트엔드 직무에 관심을 갖게 된 계기가 무엇인가요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자가 <b>단순히 외적인 이유가 아닌, 본인의 경험과 고민을 바탕으로 선택했는지, 프론트엔드가 어떤 역할을 하는지 알고 지원했는지, 성향이나 기술적 역량이 프론트엔드와 잘 맞는지</b> 확인하기 위한 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 <b>사용자가 직접 사용하는 결과물을 만들어가는 과정에 큰 매력</b>을 느껴서 프론트엔드를 선택하게 되었습니다. <br />
팀 프로젝트에서 프론트엔드 개발을 맡으며, <b>사용자의 반응과 피드백을 바로 확인할 수 있다는 점이 특히 매력적</b>이었습니다. 그 경험을 통해 <b>사용자 경험(UX)에 대한 관심</b>을 갖게 되었고, 특히 <b>사용자 친화적인 UI/UX를 설계하고 구현하는 일</b>이 저에게 잘 맞는다고 느꼈습니다. <br />
<b>사용자 입장에서 사용하기 쉬운 서비스를 개발하고 싶다는 방향성</b>이 생기면서, 자연스럽게 프론트엔드 개발자를 지망하게 되었습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#74</code> 동아리 활동을 한 적이 있나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
단순히 이력 확인이 아니라, <b>지원자의 협업 능력, 열정, 주도성, 대인관계</b> 등을 파악하기 위한 질문입니다. 면접관은 이 질문을 통해 지원자의 <b>대인관계 및 협업 능력, 주도성과 적극성, 관심사와 열정, 문제 해결 경험</b>을 평가하고자 합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 대학 시절 <b>체스 연합 동아리 활동</b>을 했습니다. 다양한 학교의 학생들과 교류하며 체스를 즐기면서, 서로 다른 성향을 이해하려 노력했습니다. 특히 동아리를 대표해서 팀을 구성해 K-체스 리그에 참가하면서 서로 협력하려고 노력했고, 팀 동료에게 유용한 정보를 제공하면서 우호적이고 서로 신뢰할 수 있는 관계를 형성할 수 있었습니다. <br />
이런 경험 덕분에 <b>새로운 환경에서도 빠르게 적응하고, 타인과 원만한 관계를 형성</b>하는 데 자신이 있습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#75</code> 본인은 과정과 결과 중 어느 것을 중시하나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
겉보기엔 단순 선택처럼 보이지만, 실제로는 <b>업무에 대한 태도, 과정 중심인지 결과 중심인지, 팀워크와 책임감의 균형감각</b> 등을 평가하려는 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 과정과 결과 모두 중요하다고 생각하지만, <b>결과를 조금 더 중시하는 편</b>입니다. <br />
<b>업무는 결국 결과로 평가되는 영역</b>이고, <b>좋은 결과는 철저한 과정을 바탕으로 이루어진다</b>고 생각하기 때문입니다. 특히 프론트엔드 직무는 <b>사용자와 맞닿는 부분</b>인 만큼, 사용자 입장에서는 개발 과정보다는 <b>눈에 보이는 결과물과 사용자 경험이 더 중요</b>하게 느껴질 수 밖에 없습니다. 그래서 저는 항상 <b>우선순위와 마감일을 고려해 계획을 세우고 실행하려고 좋은 결과물을 만들어내고자 노력</b>하고 있습니다. </p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#76</code> 돈과 명예 중 어느 것을 중시하나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 <b>지원자의 가치관, 업무 태도, 조직 적합도</b>를 파악하기 위한 질문입니다. 면접관은 <b>지원자가 어떤 기준으로 동기를 부여 받고 일을 지속하는지, 보상 중심인지, 아니면 책임과 평판 중심인지, 조직 문화와 개인 가치가 맞는지</b>를 파악하고자 합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 돈과 명예 모두 중요하다고 생각하지만, <b>명예를 조금 더 중시하는 편</b>입니다. <br />
저에게 있어서 명예는 단순한 평판을 넘어서, <b>자신이 맡은 일에 대한 책임과 신뢰를 의미</b>합니다. 특히 <b>주어진 업무에 대해 책임감 있게 수행하고 성과를 내다보면 보상도 자연스럽게 따라온다</b>고 믿습니다. 이를 위해 저는 어떤 일을 하더라도 <b>결과에 책임을 지고, 타인의 신뢰를 얻는 것을 우선시</b>하며 일하려고 노력합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#77</code> 인턴 후 정규직 전환에 자신이 있나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
단순히 자신감을 묻는 것이 아니라, 지원자의 <b>자신감과 주도성, 목표 의식, 학습 태도 및 적응력, 실질적인 기여 가능성</b>을 평가하기 위한 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
네, 저는 <b>정규직 전환에 자신이 있습니다.</b> <br />
인턴 기간은 단순히 배우는 시간을 넘어, <b>팀에 기여할 수 있는 첫 번째 기회</b>라고 생각합니다. 저는 입사 후 <b>주어진 업무에 빠르게 적응하고 회사의 개발 문화와 프로세스를 이해</b>하는 데 집중하여 <b>팀에 기여</b>할 수 있도록 노력하겠습니다. 특히 인턴 기간 동안 부족한 부분은 스스로 학습하고, <b>책임감 있게 과제를 수행</b>함으로써 <b>정규직 전환에 걸맞는 성과와 태도</b>를 보여드리고 싶습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#78</code> 
A라는 사실에 대해 모두가 B라고 말하면 어떻게 할 것인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 <b>일종의 상황 판단력, 비판적 사고 능력</b>, 그리고 <b>조직 내 소통 태도</b>를 확인하는 질문입니다. 면접관은 지원자가 <b>다수의 의견에 휩쓸리지 않고 스스로 판단할 수 있는지, 자신의 의견이 소수일 때 어떻게 대응하는지, 다름을 존중하면서 자신의 의견을 전달할 수 있는지, 필요할 때 자신의 생각을 조정하거나 타협할 수 있는지</b>를 평가하고자 합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 팀 안에서 <b>의견이 다를 수 있다는 것은 자연스러운 일</b>이라고 생각합니다. <br />
모두가 B라고 말하더라도, 제가 A라고 판단했다면 감정적으로 대응하지 않고 <b>상대방의 의견을 경청한 후 제 생각을 표현</b>하겠습니다. 만약 상황에 따라 B로 결정해야 한다면 <b>타협</b>할 줄도 알아야 한다고 생각합니다. <br />
중요한 것은 <b>제 의견을 고집하는 것이 아니라, 타인의 의견을 존중하고 팀 전체에 도움이 되는 방향으로 소통하고 결정하는 것</b>이라고 생각합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#79</code> 대학 시절 가장 노력했던 것은 무엇이었나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
단순한 과거 경험을 묻는 것이 아니라, <b>지원자의 열정, 목표 설정, 실행력, 문제 해결 태도</b>를 파악하려는 질문입니다. 면접관은 지원자가 <b>자기주도적 경험이 있는지, 어떤 목표를 세우고 어떻게 노력했는지, 과정을 통해 무엇을 배우고 성장했는지, 입사 후에도 꾸준히 노력하고 성장할 사람</b>인지 평가하고자 합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
대학 시절 가장 열심히 노력한 것은 <b>프론트엔드 개발 역량을 키우기 위한 프로젝트 활동</b>입니다. <br />
처음에는 React를 혼자 공부하며 간단한 토이 프로젝트를 수행했고, 이후에는 팀 프로젝트에서 프론트엔드를 맡아 <b>기획부터 개발, 문서 작업까지 모든 과정에 참여</b>하였습니다. 특히 디자이너와 백엔드 팀원들과 <b>요구사항을 조율하고 문제를 함께 해결해 나갔던 경험</b>이 가장 기억에 남습니다. <br />
이 경험을 바탕으로 회사에 입사한 후에도 <b>팀원들과 적극적으로 소통하고 협업하여 팀에 기여</b>하고 싶습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#80</code> 대인 관계에서 본인이 노력한 것이나 자신 있는 점은 무엇인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자의 <b>소통 능력, 갈등 해결 방식, 팀워크 역량</b> 등을 파악하기 위한 질문입니다. 이는 특히 협업이 중요한 직무(Ex. 프론트엔드, 기획, 마케팅 등)에서 자주 나오는 질문입니다. 면접관은 지원자가 <b>원만한 인간관계를 형성할 수 있는 사람인지, 팀 내 갈등 상황에서 어떻게 대처하는지, 의사소통 및 협업 능력이 있는지</b>를 평가하고자 합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
<b>저는 처음 만난 사람들과 소통하고자 노력했고, 원만한 관계를 형성하는 데 자신이 있습니다.</b> <br />
저는 대학 시절 <b>체스 연합 동아리 활동</b>을 했습니다. 다양한 학교의 학생들과 교류하며 서로 다른 성향을 이해하려 노력했습니다. 특히 동아리를 대표해서 팀을 구성해 K-체스 리그에 참가하면서 서로 협력하려고 노력했고, 팀 동료에게 유용한 정보를 제공하면서 우호적이고 서로 신뢰할 수 있는 관계를 형성할 수 있었습니다. <br />
이런 경험 덕분에 <b>새로운 환경에서도 빠르게 적응하고, 타인과 원만한 관계를 형성</b>하는 데 자신이 있습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#81</code> 한화시스템 ICT가 어떤 업무를 하고 계열사에게 어떤 서비스를 제공하는지 아시나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 지원자가 <b>회사에 대해 사전 조사를 해왔는지, 단순히 기술 역량만이 아니라, 해당 기업의 사업 구조와 방향을 이해하고 있는지, 지원한 직무가 회사 내에서 어떤 역할을 할 수 있을지를 고민해봤는지</b> 파악하기 위한 질문입니다. 즉, 단순히 “코딩 잘합니다”보다는 <b>“왜 이 회사인지, 내가 어떤 기여를 할 수 있을지”</b>에 대한 논리적인 이해와 준비가 있는지를 보는 것입니다.
</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
네, 한화시스템 ICT 부문은 방산, 금융, 서비스 등 다양한 산업 분야에서 IT 종합 솔루션을 제공해온 전문 기업으로, 고객사의 비즈니스 혁신과 디지털 전환을 선도하는 업무를 수행합니다. 최근에는 블록체인 자체 플랫폼을 마련하고 인공지능 분야 글로벌 기업과 기술 파트너십을 체결하는 등 4차 산업혁명 시대의 핵심 솔루션을 구축해 나가고 있습니다. <br />
이와 관련해 제가 지원한 서비스 개발/운영 직무는 <b>계열사 업무 시스템을 개발하고 운영하는 업무를 수행</b>합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#82</code> 4차 산업혁명에 대해 설명해 주세요. 그중 관심 있는 기술에 대해서는 아는대로 상세히 설명해 주세요.</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 <b>기술 전반에 대한 이해도, 관심 분야</b>, 그리고 <b>지속적인 학습 의지</b>를 확인하기 위한 질문입니다. 특히 IT 서비스나 개발 직무에서 중요한 <b>기술 감수성</b>과 <b>미래지향적인 사고</b>를 평가하려는 의도가 있습니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
4차 산업혁명은 인공지능, 빅데이터, IoT, 클라우드 등 첨단 기술들이 서로 융합하면서 기존 산업의 패러다임을 근본적으로 변화시키는 혁신의 흐름이라고 알고 있습니다. <br />
저는 그 중에서도 인공지능 기반의 서비스에 가장 관심이 많습니다. [실시간 점자 번역] 앱에서는 점자 인식 AI 모델을 도입했고, [언어 습관 교정 키보드 앱]에서는 비속어 및 혐오표현 인식 AI 모델을 도입하였습니다. 프론트엔드 개발자 입장에서는 이런 AI 기능을 사용자가 사용하기 쉽도록 직관적인 UI/UX를 구현하는 능력이 중요하다고 생각합니다. <br />
앞으로도 AI 기술을 활용한 <b>더 직관적이고 개인화된 사용자 경험</b>을 제공하는 데 기여하고 싶습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#83</code> 간단한 자기소개를 해주세요.</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
지원자가 면접에 임하는 마음가짐을 확인하고, 면접관과 지원자 사이의 감정적 거리를 줄이며 지원자의 캐릭터를 파악하기 위해서입니다. 답변 시 <b>간단한 인사말 → 강조하고 싶은 나의 역량/장점 먼저 제시 → 역량에 대한 구체적인 뒷받침 내용 → 간단한 입사 후 포부 또는 지원동기</b> 순서로 답변하여 <b>본인의 장점, 특성, 차별화된 부분을 이용하여 회사에 어떻게 기여하겠다</b>는 내용을 설명하는 것이 좋습니다. </p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
안녕하세요. 서비스 개발/운영 직무에 지원한 노현진입니다. <br />
저는 <b>사용자 경험과 웹 성능 최적화에 깊은 관심</b>을 가지고 <b>프론트엔드 개발</b>을 중심으로 역량을 쌓아왔습니다. React와 Next.js를 사용한 웹 개발 경험이 있으며, TypeScript를 기본으로 사용합니다. 특히, 팀 프로젝트에서 프론트엔드 개발을 맡으며 <b>백엔드 팀원과 디자이너와 긴밀하게 협업한 경험</b>이 있습니다. 이 과정에서 <b>사용자 시나리오를 바탕으로 직관적인 UI/UX를 구현</b>하기 위해, 팀원들과 적극적인 소통을 통해 화면 구성과 기능 세부사항까지 함께 다듬어 나갔습니다. <br />
앞으로도 기술 역량을 물론, 협업 및 소통 역량까지 함께 성장시키며, <b>사용자와 팀 모두에게 긍정적인 영향을 주는 개발자</b>가 되고 싶습니다. 감사합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#84</code> 재수를 한 이유는 무엇인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
다소 민감하게 느껴질 수 있는 질문이지만, 면접관 입장에서는 <b>지원자의 자기주도성, 목표 의식, 위기 대응력</b> 등을 파악하려는 의도입니다. 단순히 학업 이력 자체를 평가하려는 것이 아니라, <b>재수라는 선택을 어떻게 받아들이고 극복했는지</b>를 보고자 하는 것입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 첫 수능을 치를 때 스스로 충분히 준비가 됐다고 생각했지만, 결과는 좋지 못했습니다. 되돌아보면, 당시에는 제 실력을 객관적으로 판단하지 못하고 다소 자만했던 것 같습니다. 그 경험을 계기로 제 자신을 더 냉정하고 돌아보고, 부족한 점을 보완하기 위해 재수를 결심했습니다. 재수 기간 동안은 <b>인내심을 기르고</b> 목표 달성을 위한 <b>꾸준함과 자기 관리의 중요성</b>을 배울 수 있었습니다. 이 경험 덕분에 <b>지금도 제 실력에 대해 객관적으로 평가하고 꾸준히 개발 공부를 하고 있으며, 스스로 관리하는 습관을 유지</b>하고 있습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#85</code> 평점이 좋은 데 대학 시절 공부를 열심히 했나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 단순히 성적만 본 것이 아니라, <b>성적과 실제 학습 태도의 진정성</b>을 확인하기 위한 것입니다. 면접관은 <b>좋은 성적의 배경이 노력인지, 아니면 요행인지, 학업 외 활동과의 균형은 어땠는지, 자기주도적으로 공부했는지, 아니면 수동적인 자세였는지, 실무와 연결되는 학습 태도를 가지고 있는지</b>를 평가하고자 합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
네, 저는 대학 시절 공부에 꾸준히 집중했습니다. <br />
수업 내용을 단순히 외우기보다는, <b>내용을 이해하고 팀 프로젝트에 적용하려는 자세로 공부</b>했기 때문에 성적도 자연스럽게 따라왔다고 생각합니다. 예를 들어, 오픈소스SW프로젝트 과목에서 배운 Git, 협업 방식 등을 기반으로 팀 프로젝트를 진행해왔고 좋은 성적을 거둘 수 있었습니다. 이런 경험을 통해 <b>이론과 실습을 자연스럽게 연결</b>하여 좋은 성적을 거둘 수 있었다고 생각합니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#86</code> 해당 자격증을 딴 이유는 무엇인가요? (=어떤 자격증을 가지고 있나요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문의 의도는 단순히 자격증을 취득했는지 확인하려는 것이 아니라, <b>해당 자격증이 지원자의 진로 및 목표와 어떻게 연결되는지, 자발적으로 준비한 것인지, 어떤 목적을 가지고 있는지</b>를 확인하고자 하는 것입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
저는 개발자로서의 역량을 키우기 위해 <b>TOPCIT 점수</b>를 취득하였습니다. 이 과정에서 <b>소프트웨어 개발과 데이터베이스에 대한 전반적인 이해와 문제 해결 역량</b>을 키울 수 있었습니다. <br />
또한 <b>COS Pro</b>와 <b>PCSQL 자격증</b>은 제 프로그래밍과 SQL 실력을 객관적으로 검증하고 싶어서 준비했습니다. 이를 통해 <b>기초 문법뿐만 아니라 알고리즘 구현 및 데이터 처리 능력까지 확인</b>할 수 있었고, 개발 과정에서 자신감을 가지게 되는 계기가 되었습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#87</code> 수상 경력에서 MACH 게임아트 과제전 최우수상은 무엇인가요? (=수상 경력이 있나요?) (=어떤 상을 받았나요?)</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 <b>지원자의 노력과 성과 경험, 지원자의 강점과 역량, 주도성, 협업 능력, 문제 해결력</b>을 확인하기 위한 질문입니다. 면접관은 <b>수상 경력이 단순한 결과가 아닌, 어떤 노력과 과정을 통해 이루어졌는지</b>를 보고 싶어 합니다. 또한 <b>수상 내용이 직무 역량과 관련이 있는지, 혼자 또는 팀으로 어떤 문제를 해결하거나 기여한 경험이 있는지</b> 확인하고자 합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
- 자신만의 미로를 만들고 서로 상대방의 미로에 숨겨진 깃발을 먼저 찾는 멀티플레이어 게임 [배틀메이즈]를 아이디어로 제시 <br />
- 시장 조사를 통해 주요 모바일 게임의 특징을 분석하고, SWOT  분석을 활용하여 제시한 아이디어의 강점, 약점, 기회, 위협이 되는 요소를 분석 <br />
- 제시한 서비스의 특장점 및 기대 효과 분석 <br />
<br />
저는 대학 시절 <b>MACH 게임아트 과제전에서 최우수상을 수상</b>한 경험이 있습니다. <br />
이 대회에서 <b>“배틀메이즈”라는 멀티플레이어 게임 아이디어</b>를 제안했는데, 각 플레이어가 직접 미로를 설계하고 서로의 미로에 숨겨진 깃발을 먼저 찾는 방식의 게임입니다. 단순히 아이디어 제시에 그치지 않고, <b>시장 조사를 통해 주요 모바일 게임의 트렌드를 분석</b>하고, <b>SWOT 분석을 통해 제안한 게임의 강점, 약점, 기회, 위협이 되는 요소까지 구체적으로 정리</b>하였습니다. 이러한 <b>논리적인 기획과 분석 과정</b>이 좋은 평가를 받았고, 결과적으로 최우수상을 수상할 수 있었습니다. <br />
이 경험을 통해 <b>기획력과 논리적인 분석 능력의 중요성</b>을 알 수 있었고, 이후 팀 프로젝트를 진행할 때 기획과 분석에 많은 신경을 쓰고 있습니다.</p></blockquote>

</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#88</code> 수상 경력에서 제 1회 UCC 공모전은 무엇인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 <b>지원자의 노력과 성과 경험, 지원자의 강점과 역량, 주도성, 협업 능력, 문제 해결력</b>을 확인하기 위한 질문입니다. 면접관은 <b>수상 경력이 단순한 결과가 아닌, 어떤 노력과 과정을 통해 이루어졌는지</b>를 보고 싶어 합니다. 또한 <b>수상 내용이 직무 역량과 관련이 있는지, 혼자 또는 팀으로 어떤 문제를 해결하거나 기여한 경험이 있는지</b> 확인하고자 합니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
- “바쁜 일상 속에 지친 우리. 끊임없이 노력하지만 결과는 좋지 않다. 로또에 당첨되면서 하고 싶은 것을 모두 한다.”라는 내용의 59초 UCC 영상 제작 <br />
- 해당 UCC 영상을 통해 바쁘게 살아가는 현대인들의 공감 유발 <br />
<br />
저는 대학 시절 <b>제 1회 UCC 공모전 - 59초 UCC 부문에서 우수상을 수상한 경험</b>이 있습니다. <br />
해당 대회에서 만든 영상은, “바쁜 일상에 지쳐 있지만, 로또에 당첨되면 하고 싶은 걸 다 해보자.”는 내용을 담은 영상이었고, <b>현대인이 공감할 수 있는 현실과 상상을 대비</b>시켜 메시지를 전달하고자 했습니다. 59초라는 짧은 시간 안에 스토리를 담아야 했기 때문에 <b>기획이 매우 중요</b>했고, <b>공감 가는 메시지를 압축적으로 전달하는 데 집중</b>했습니다. 결과적으로 많은 분들의 공감을 이끌어 냈고, 그 점이 좋은 평가를 받아 우수상을 수상할 수 있었습니다. <br />
이 경험을 통해 <b>짧은 시간 안에 핵심을 전달하는 능력과 사용자나 고객의 관점에서 생각하는 시각</b>을 키울 수 있었습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#89</code> 네이버 부스트캠프 웹 · 모바일 9기에서 무엇을 했나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 지원자가 단순히 이수했는지가 아니라, <b>어떤 프로젝트를 했고, 어떻게 성장했는지, 기술적 깊이가 있는지</b>를 확인하는 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
네이버 부스트캠프 웹 · 모바일 9기에 참여하여 클라이언트부터 서버까지 웹 전반에 대해 학습하고 6주 간의 그룹 프로젝트를 진행하였습니다. <br />
특히 그룹 프로젝트로 MafiaCamp 프로젝트를 진행하였습니다. MafiaCamp 프로젝트는 WebRTC와 웹 소켓을 활용한 온라인 화상 마피아 게임입니다. 해당 프로젝트는 시중에 나와있는 온라인 마피아 게임이 텍스트 채팅만 가능할 뿐, 화상 채팅이 불가능하다는 점을 확인한 후, 좀 더 직관적인 온라인 마피아 게임 서비스를 제공하기 위해 진행하였습니다. 화상 채팅을 구현하기 위해 WebRTC를 사용하였으며, 실시간 투표 시스템, 채팅 기능, 실시간으로 개설되어 있는 게임방 목록을 조회하는 기능 등을 구현하기 위해 웹 소켓을 사용하였습니다. 또한 배포 시 개발 환경과 배포 환경을 일치하도록 Docker를 사용하였으며, GitHub Actions을 활용하여 CI/CD를 구축하여 배포 과정을 자동화하여 개발 속도를 향상시켰습니다. <br />
네이버 부스트캠프 웹 · 모바일 9기에 참여하여 기획부터 개발, 문서 작업까지 전반적인 개발 과정에 대해 경험할 수 있었고 프로젝트 역량을 쌓을 수 있었습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#90</code> 캡스톤디자인(1) 졸업 프로젝트에서 실시간 점자 번역 앱을 개발할 때 처음부터 오픈소스를 사용하지 않고 직접 AI 모델을 구축하려고 시도한 이유는 무엇이었나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 지원자의 <b>기술 선택의 기준과 판단력, 문제 해결 방식과 도전 정신, 기술적 깊이와 실험 경험</b>을 파악하기 위한 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
해당 프로젝트에서 처음부터 오픈소스를 사용하지 않고 AI 모델을 직접 구축하려고 시도한 이유는, <b>프로젝트의 핵심 기능을 담당하면서 낯선 기술에 정면으로 도전해보고 싶다는 강한 의지</b>가 있었기 때문입니다. <br />
단순히 오픈소스를 활용하는 것보다, 데이터 수집과 딥러닝 학습, AI 모델 구축까지 모든 과정을 경험하면서 도전해보고 싶었습니다. 이를 위해 책과 인터넷 자료를 통해 AI 모델 구축에 필요한 지식을 학습하고, 모델 학습을 위해 점자 이미지를 직접 수집하고, CNN 기반의 모델 구축을 시도하였습니다. 결과적으로는 모델 성능은 많이 떨어졌지만, 이 과정에서 AI 관련 지식과 문제 해결 능력을 키울 수 있었습니다. <br />
이 경험을 통해 저는 <b>새로운 기술에 대해 도전하는 자세와, 자신이 맡은 일에 대해 책임을 지는 자세, 상황에 맞는 판단을 내릴 수 있는 사고력</b>을 기를 수 있었습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#91</code> 사진 내 점자 번역 앱을 개발하지 않고 실시간 점자 번역 앱을 개발한 계기는 무엇인가요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
이 질문은 지원자가 <b>특정 서비스를 개발하게 된 계기</b>를 묻는 질문입니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
사진을 찍어 점자를 인식하는 방식은 이미 시중에 다양한 앱이 제공하고 있어, 단순히 동일한 기능을 구현하고 싶지 않았습니다. <br />
그래서 저는 기능적으로 차별화할 수 있을 방향을 고민했고, 결과적으로 카메라를 통해 점자를 실시간으로 인식하고 번역하는 앱을 아이디어로 제안하였습니다.</p></blockquote>
</details>

<details>
<summary><code class="language-plaintext highlighter-rouge">#92</code> 배포된 백엔드는 SpringBoot인데, 왜 프로토타입 코드는 NestJS로 작성했나요?</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
기술 선택의 <b>유연성, 실용성</b>, 그리고 <b>프로토타입 단계의 목적</b>을 중심으로 논리적으로 설명하면 됩니다.</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
프로토타입 코드는 최종 배포 목적이 아닌, <b>빠르게 아이디어를 검증하고 프론트엔드와 백엔드 간의 통신 구조를 파악하기 위한 용도</b>였기 때문에, <b>짧은 시간 안에 정확하게 구현하는 것이 중요</b>했습니다. <br />
저는 Node.js 기반의 백엔드 코드 작성에 익숙했기 때문에, NestJS 프레임워크를 사용해 빠르고 안정적으로 RESTful API를 구현할 수 있었습니다. 또한 NestJS는 구조화된 모듈 시스템과 데코레이터 기반의 코드 작성 방식 등에서 SpringBoot와 유사한 점이 많기 때문에, 백엔드 팀원이 코드를 이해하는 데 어려움이 없었습니다. 실제로 백엔드 팀원이 제 코드를 참고해 빠르게 프로덕션 코드를 구현할 수 있었고, 프론트엔드 개발도 병렬로 진행할 수 있어서 전체 개발 시간을 단축할 수 있었습니다.</p></blockquote>
</details>

## 참고 자료

- <a href="https://www.jobplanet.co.kr/companies/336387/interviews/%ED%95%9C%ED%99%94%EC%8B%9C%EC%8A%A4%ED%85%9C-ict%EB%B6%80%EB%AC%B8" target="_blank">한화시스템(주) ICT부문 2025년 기업정보 | 195건 면접후기 3.0 면접난이도 | 잡플래닛</a>
- <a href="https://www.jobkorea.co.kr/starter/review/view?C_Idx=386&Half_Year_Type_Code=0&Ctgr_Code=5&FavorCo_Stat=0&G_ID=0&Page=1" target="_blank">한화시스템(주) - 실제 면접 질문 75건 확인하기 | 잡코리아</a>
- <a href="https://blog.naver.com/grace915/223380297408" target="_blank">네이버 블로그 | 장이의 블로그 - 한화시스템 취준 후기 (자소서, 코테, AI면접, 면접, 인턴십)</a>
- <a href="https://didu-story.tistory.com/448" target="_blank">[2023 상반기] 한화시스템/ICT 서류, 코딩테스트, 1차, 2차면접 후기</a>
- <a href="https://0m1n.tistory.com/152" target="_blank">[한화시스템] 2023년 하반기 한화시스템 ICT 서비스 개발 후기 (서류, AI, 인성, 코딩테스트, 면접)</a>
- <a href="https://velog.io/@charming-l/%EC%9A%B0%EB%8B%B9%ED%83%95%ED%83%95-%ED%95%9C%ED%99%94%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%84%9C%EB%A5%98%EB%A9%B4%EC%A0%91-%EB%AA%A8%ED%97%98" target="_blank">우당탕탕 한화시스템 서류/면접기</a>
- <a href="https://www.catch.co.kr/News/RecruitNews/296857" target="_blank">한화그룹 상반기 공채 대비 면접후기·기출문제 | 캐치</a>
- <a href="https://jasoseol.com/blog/post/%ED%95%9C%ED%99%94%EC%8B%9C%EC%8A%A4%ED%85%9C-%ED%95%A9%EA%B2%A9-%ED%9B%84%EA%B8%B0-%EC%9E%90%EC%86%8C%EC%84%9C-%ED%8C%81-%EC%9D%B8%EC%A0%81%EC%84%B1-%EB%A9%B4%EC%A0%91-%EC%A7%88%EB%AC%B8%EA%B9%8C/" target="_blank">한화시스템 합격 후기: 자소서 팁, 인적성, 면접 질문까지</a>
