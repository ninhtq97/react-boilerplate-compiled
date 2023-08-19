/// <reference types="react" />
declare const useMeta: () => {
    meta: import("..").TMeta;
    setMeta: import("react").Dispatch<import("react").SetStateAction<import("..").TMeta>>;
};
export default useMeta;
