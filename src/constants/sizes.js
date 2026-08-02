// Mirrors lib/core/const/size.dart
export function horizontalPadding({ isDesktop, isTablet }) {
  if (isDesktop) return 64
  if (isTablet) return 48
  return 16
}

export function verticalPadding({ isDesktop, isTablet }) {
  if (isDesktop) return 32
  if (isTablet) return 24
  return 12
}
