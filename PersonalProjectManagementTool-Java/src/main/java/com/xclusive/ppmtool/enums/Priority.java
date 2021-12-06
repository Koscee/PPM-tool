package com.xclusive.ppmtool.enums;

public enum Priority {
    HIGH(1),
    MEDIUM(2),
    LOW(3);

    private Integer value;

    private Priority(Integer value) {
        this.value = value;
    }

    public Integer getValue() {
        return this.value;
    }
}
