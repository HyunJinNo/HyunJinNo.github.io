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
</details>

<blockquote class="prompt-info"><p><strong><u>Answer 2</u></strong><br>
직장 생활에서 가장 중요하다고 생각하는 세 가지는 <b>소통, 책임감, 배움의 자세</b>입니다. <br />
첫째, <b>소통</b>은 협업의 기본이라고 생각합니다. 혼자서 일하는 경우는 없기 때문에, 경청하고 존중하며 자신의 의견을 명확히 전달하는 것이 중요하다고 생각합니다. <br />
둘째, <b>책임감</b>입니다. 주어진 업무를 책임감을 갖고 끝까지 해내는 태도가 팀 전체에 신뢰를 주고, 업무 흐름에도 큰 영향을 주기 때문입니다. <br />
마지막으로 <b>배움의 자세</b>입니다. 기술은 빠르게 변화하기 때문에, 새로운 언어나 프레임워크, 트렌드를 꾸준히 공부하는 것이 중요하다고 생각합니다. <br />
이 세 가지를 바탕으로 팀에 긍정적인 영향을 주는 구성원이 되고 싶습니다.</p></blockquote>

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

#################################################################################################################################################

<details>
<summary><code class="language-plaintext highlighter-rouge">#TODO</code> TODO</summary>

<blockquote class="prompt-tip"><p><strong><u>답변 Tip</u></strong><br>
TODO</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Answer</u></strong><br>
TODO</p></blockquote>
</details>

## 참고 자료

- ?
