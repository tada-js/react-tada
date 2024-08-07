const Description = () => {
  return (
    <>
      <div className="bg-slate-200 p-2 my-4">
        <h2 className="text-lg py-4">
          This structure consists of multiple `Counter` components and two
          nested `CountProvider` components.
        </h2>
        <p className="py-2">
          1. The first two `Counter` components are at the top level and do not
          belong to any `CountProvider`. This means these two `Counter`
          components do not share any state.
        </p>
        <p className="py-2">
          2. Next, inside the first `CountProvider`, there are two `Counter`
          components. These two `Counter` components share the state provided by
          the first `CountProvider`.
        </p>
        <p className="py-2">
          3. Finally, the second `CountProvider` is nested inside the first
          `CountProvider`, and inside it, there is one `Counter` component. This
          `Counter` component uses the state provided by the second
          `CountProvider`.
        </p>
        <p className="py-2">
          So, to summarize the entire structure: - At the top level, there are
          two independent `Counter` components. - Inside the first
          `CountProvider`, there are two `Counter` components that share the
          state from the first `CountProvider`. - The second `CountProvider` is
          nested inside the first `CountProvider`, and it contains one `Counter`
          component that uses the state from the second `CountProvider`.
        </p>
      </div>
      <div className="bg-slate-200 my-4 p-2">
        <h2 className="text-lg py-4">
          이 구조는 여러 `Counter` 컴포넌트와 두 개의 중첩된 `CountProvider`
          컴포넌트를 포함하고 있습니다.
        </h2>
        <p className="py-2">
          1. 첫 번째 두 개의 `Counter`는 최상위에 위치하며, 어떤
          `CountProvider`에도 속하지 않습니다. 즉, 이 두 `Counter`는 상태를
          공유하지 않습니다.
        </p>
        <p className="py-2">
          2. 다음으로, 첫 번째 `CountProvider` 내부에 두 개의 `Counter`가
          있습니다. 이 두 `Counter`는 첫 번째 `CountProvider`의 상태를
          공유합니다.
        </p>
        <p className="py-2">
          3. 마지막으로, 두 번째 `CountProvider`는 첫 번째 `CountProvider`
          내부에 중첩되어 있으며, 이 안에 하나의 `Counter`가 있습니다. 이
          `Counter`는 두 번째 `CountProvider`의 상태를 사용합니다.
        </p>
        <p className="py-2">
          따라서, 전체 구조는 다음과 같이 요약할 수 있습니다: - 최상위에 두 개의
          독립된 `Counter`. - 첫 번째 `CountProvider` 내부에 두 개의 `Counter`가
          있으며, 이들은 상태를 공유합니다. - 두 번째 `CountProvider`는 첫 번째
          `CountProvider` 내부에 중첩되어 있고, 그 내부에 하나의 `Counter`가
          있으며, 이 `Counter`는 두 번째 `CountProvider`의 상태를 사용합니다.
        </p>
      </div>
    </>
  );
};

export default Description;
