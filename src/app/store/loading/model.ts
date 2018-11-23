/**
 *
 */
export interface LoadingState {
  /** */
  isloading: boolean;
}

export const initState: LoadingState = {
  isloading: false
};

/**
 *
 */
export interface LoadingFeatureState {
  /** */
  loading: LoadingState;
}
