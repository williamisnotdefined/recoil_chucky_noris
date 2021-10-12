const useLoadableResult = (loadableValue) => {
  const { state, contents } = loadableValue

  return {
    isLoading: state === 'loading',
    hasError: state === 'hasError',
    hasValue: state === 'hasValue',
    contents,
  }
}

export default useLoadableResult