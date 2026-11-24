use wasm_bindgen::prelude::*;

fn linear_channel(channel: u8) -> f64 {
    let value = f64::from(channel) / 255.0;
    if value <= 0.04045 {
        value / 12.92
    } else {
        ((value + 0.055) / 1.055).powf(2.4)
    }
}

/// WCAG relative luminance for an opaque sRGB colour.
#[wasm_bindgen]
pub fn relative_luminance(red: u8, green: u8, blue: u8) -> f64 {
    0.2126 * linear_channel(red)
        + 0.7152 * linear_channel(green)
        + 0.0722 * linear_channel(blue)
}

/// WCAG contrast ratio between two opaque sRGB colours.
#[wasm_bindgen]
pub fn contrast_ratio(
    first_red: u8,
    first_green: u8,
    first_blue: u8,
    second_red: u8,
    second_green: u8,
    second_blue: u8,
) -> f64 {
    let first = relative_luminance(first_red, first_green, first_blue);
    let second = relative_luminance(second_red, second_green, second_blue);
    let lighter = first.max(second);
    let darker = first.min(second);
    (lighter + 0.05) / (darker + 0.05)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn black_and_white_have_wcag_maximum_contrast() {
        let ratio = contrast_ratio(0, 0, 0, 255, 255, 255);
        assert!((ratio - 21.0).abs() < 1e-10);
    }

    #[test]
    fn identical_colours_have_unit_contrast() {
        let ratio = contrast_ratio(34, 85, 136, 34, 85, 136);
        assert!((ratio - 1.0).abs() < 1e-10);
    }

    #[test]
    fn opaque_srgb_luminance_endpoints_are_exact() {
        assert!((relative_luminance(0, 0, 0)).abs() < 1e-12);
        assert!((relative_luminance(255, 255, 255) - 1.0).abs() < 1e-12);
    }
}
