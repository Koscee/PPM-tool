package com.xclusive.ppmtool.enums;

public enum Status {
    TODO("TO_DO"),
    IN_PROGRESS("IN_PROGRESS"),
    DONE("DONE");

    private String action;

    private Status(String action) {
        this.action = action;
    }

    public String getAction() {
        return this.action;
    }
}
