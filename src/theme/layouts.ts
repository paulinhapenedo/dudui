import { StyleSheet } from 'react-native';

export const constants = {
  defaultMargin: 30,
  defaultHitSlop: {
    bottom: 24,
    left: 24,
    right: 24,
    top: 24,
  },
};

export const layouts = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  alignCenter: {
    alignItems: 'center',
  },
  centerHorizontal: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerVertical: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  defaultHorizontalMargin: {
    marginHorizontal: constants.defaultMargin,
  },
  defaultHorizontalPadding: {
    paddingHorizontal: constants.defaultMargin,
  },
  defaultPaddingTop: {
    paddingTop: constants.defaultMargin,
  },
  defaultPaddingBottom: {
    paddingBottom: constants.defaultMargin,
  },
  defaultPadding: {
    padding: constants.defaultMargin,
  },
  flexRow: {
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
  halfWidth: {
    width: '50%',
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  over: {
    ...StyleSheet.absoluteFillObject,
  },
  wrapWidth: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  disabled: {
    opacity: 0.5,
  },
  absoluteWithMargin: {
    position: 'absolute',
    left: constants.defaultMargin,
    right: constants.defaultMargin,
  },
});
