import { Icon } from "semantic-ui-react";
//사용자 정의 404 페이지를 생성하기 위해 pages/404.js파일을 생성할 수 있습니다. 이 파일은 빌드 시 정적으로 생성됩니다.
//404는 스테틱으로 남겨두는게 더 좋음  근데 왜?? 왜 더 좋은건지 모르겠음
export default function Error404() {
  return (
    <div style={{ padding: "200px 0", textAlign: "center", fontSize: 30 }}>
      <Icon name="warning circle" color="red" />
      404: 페이지를 찾을 수 없습니다.
    </div>
  );
}
